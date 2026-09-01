# Neonforge 项目文档

[English](README.md) | 中文

这里是 DSH Neonforge 的项目专属文档入口。Neonforge 是面向 DeepSeek Harness Web 的独立社区视觉皮肤插件；它保留 DSH 的 Agent runtime、会话、工具、权限、工作区和插件组合，只负责视觉层和主题呈现。

## 文档地图

| 文档 | 用途 |
| --- | --- |
| [项目总底稿](../../project.md) | 项目定位、实现范围、设计思路、事实边界和 Blog 素材 |
| [社区宣发稿](community-promo.md) | 使用项目完整截图、可直接发布到 DSH GitHub Discussions 的中文帖子草稿 |
| [UI 设计参考](../design/neonforge-ui.md) | 视觉 token、布局、组件、插件隔离和验证规则 |
| [视觉研究](../design/boujoy-harness-design-analysis.md) | 视觉研究来源、适配护栏和独立实现边界 |
| [社区宣发写法研究](../../community-promo-research.md) | DSH 官方社区帖子结构、免责声明和发布信息要求 |
| [插件 README](../../plugins/dsh-neonforge/README.md) | 安装、设置、兼容性和开发说明 |

## 项目结构

```text
plugins/dsh-neonforge/       Installable Neonforge patch bundle and release package
  assets/                    Dark and light screenshots used by READMEs and docs
  cordis.patch.yml           Plugin composition entry for the DSH Web profile
  package.json               npm package, profile, and client injection declarations

packages/client/             DSH client extension points and visual markers used by Neonforge
  ui-theme/                  Theme installer and neonforge.css
  ui-layout/                 Workbench shell and three-column region markers
  ui-sidebar/                Sidebar and navigation markers
  ui-workspace/              Workspace, project, and session markers
  ui-conversation/           Conversation, Composer, and action markers

docs/neonforge/              This directory: project entry point and publication material
  assets/                    Full-resolution screenshots for the community announcement
docs/design/                 Neonforge design references in the DSH design tier
project.md                   Cross-document project narrative and fact brief
```

## 文档使用方式

- 写 Blog：从[项目总底稿](../../project.md)的项目定位、设计思路和短介绍开始，再按文章需要取用截图和技术细节。
- 发 DSH 社区：优先使用[社区宣发稿](community-promo.md)，保留开头的非官方声明、安装命令、集成边界和具体反馈问题。
- 解释设计：链接 [UI 设计参考](../design/neonforge-ui.md)，不要在宣发帖中堆放完整 token 表和选择器规则。
- 说明安装：链接[插件 README](../../plugins/dsh-neonforge/README.md)，不要在项目底稿中重复维护全部开发命令。

## 维护边界

项目底稿和社区宣发稿服务于对外写作；插件 README 服务于安装与使用；UI 设计参考服务于设计和实现约束；视觉研究与社区写法研究服务于背景材料。修改某项事实时，应优先更新它的唯一归属文档，再在其他文档中保留短说明和链接。
