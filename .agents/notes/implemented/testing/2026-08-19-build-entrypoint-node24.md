# Agent Note: Reliable TypeScript script entry detection

Status: implemented

English | [中文](2026-08-19-build-entrypoint-node24.zh.md)

## Problem

Node 24 can execute repository TypeScript scripts through the `tsx` ESM loader with `import.meta.main` unset. Affected scripts then skip their command logic, exit successfully, and either omit build artifacts or report quality gates as passed without running them.

## Decision

The five affected scripts—`build.ts`, `run-gates.ts`, `verify-cordis-config.ts`, `verify-doc-site-fragments.ts`, and `verify-runtime-closure.ts`—call the shared `isEntryModule()` helper. The helper uses Node's native direct-entry result when available and otherwise compares the resolved launched path with the module URL. This preserves direct execution for loaders that omit `import.meta.main` while keeping imported modules inert.

The helper test covers native entry results, loader fallback matching, and imported modules without a launched path. The build regression test launches the real TypeScript file through `node --import tsx/esm` and passes an unknown option; it requires argument parsing to fail, proving that the entrypoint ran instead of silently succeeding.

## Alternatives considered

**Keep only `import.meta.main`.** This preserves the native check but leaves five scripts vulnerable to silent no-ops under loaders that leave the property unset.

**Patch each script independently.** This fixes the immediate call sites but duplicates entry detection and allows future scripts to diverge.

**Always invoke each `main()`.** This makes importing a script execute its command and can mutate the caller's workspace or terminate the importing process.

**Add separate JavaScript launchers.** This avoids loader-specific entry detection but adds one launcher per command and does not fix direct TypeScript execution through a loader.

## Consequences

The five scripts remain safe to import, and direct execution works with both native Node entry detection and loaders that omit `import.meta.main`. The shared fallback keeps CLI behavior distinct from library imports by requiring the launched path to resolve to the current module.
