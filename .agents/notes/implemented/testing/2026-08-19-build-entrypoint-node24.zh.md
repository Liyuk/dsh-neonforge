# Agent Note：可靠的 TypeScript 脚本入口检测

Status: implemented

[English](2026-08-19-build-entrypoint-node24.md) | 中文

## 问题

Node 24 可能通过 `tsx` ESM loader 执行仓库 TypeScript 脚本，但不设置 `import.meta.main`。受影响的脚本会跳过命令逻辑并成功退出，从而不生成构建产物，或在质量门禁实际没有运行时报告通过。

## 决策

五个受影响的脚本——`build.ts`、`run-gates.ts`、`verify-cordis-config.ts`、`verify-doc-site-fragments.ts` 和 `verify-runtime-closure.ts`——调用共享的 `isEntryModule()` helper。该 helper 优先使用 Node 原生的直接入口结果；若原生结果不可用，则比较解析后的启动路径与模块 URL。当 loader 不提供 `import.meta.main` 时，这能保留直接执行能力，同时让被导入的模块保持惰性。

helper 测试覆盖原生入口结果、loader 回退匹配，以及缺少启动路径的模块导入。构建回归测试通过 `node --import tsx/esm` 启动真实 TypeScript 文件并传入未知选项；测试要求参数解析失败，从而证明入口确实执行，而不是静默成功。

## 曾考虑的替代方案

**只保留 `import.meta.main`。** 这保留原生检查，但会让五个脚本在未设置该属性的 loader 下静默不执行。

**分别修补每个脚本。** 这能修复现有调用点，但会重复入口检测逻辑，并允许未来脚本产生差异。

**始终调用每个 `main()`。** 这会让导入脚本执行命令，并可能修改调用方工作区或终止导入进程。

**增加独立的 JavaScript launcher。** 这避开 loader 的入口检测差异，但每个命令都要增加 launcher，也不能修复通过 loader 直接执行 TypeScript 的路径。

## 后果

五个脚本仍然可以安全导入，并且在原生 Node 入口检测和不提供 `import.meta.main` 的 loader 下都支持直接执行。共享回退逻辑要求启动路径解析后等于当前模块，因此 CLI 行为与库导入保持分离。
