# Agent Note: Neonforge sidebar visual language

Status: implemented

English | [中文](2026-08-31-neonforge-sidebar-visual-language.zh.md)

## Problem

The Neonforge skin styled workspace rows and the conversation shell, but the sidebar still read as an unbranded default DSH column. The reference design depends on a coherent rail: an industrial brand plate, compact navigation cards, offset folder/session tickets, and a small system telemetry signature. Adding those elements must not replace the existing sidebar slots or change workspace/session behavior.

## Decision

The sidebar keeps the existing `SidebarRoot` and `WorkspaceBrowser` structure. Stable `data-neonforge-*` markers identify the sidebar shell, wide/rail mode, logo row, brand action, and footer. The theme owns their presentation: a dark dotted rail, acid brand plate with blue offset depth, restrained nav-card elevation, and a `SYS_ / VER.2.4.7` footer signature. The runtime plugin applies equivalent markers when it decorates an already-built host and removes every marker during teardown. No navigation, workspace, or session state is duplicated in the plugin.

## Alternatives considered

- **Replace the sidebar with a plugin-rendered replica.** Rejected: it would fork navigation and workspace behavior, making host updates and accessibility semantics diverge.
- **Add bitmap industrial artwork as a required asset.** Rejected: the repository has no supplied brand plate or texture asset; CSS geometry and the existing brand slots provide the visual cue without inventing an image or changing the asset pipeline.
- **Change the AppFrame grid width.** Rejected: the reference can be approached inside the existing column, while changing grid tracks would affect conversation/details layout and narrow-window behavior.

## Consequences

The sidebar now has a distinct Neonforge identity while retaining DSH's DOM, slot ownership, keyboard order, and workspace/session interactions. The visual treatment is intentionally scoped to `body[data-dsh-neonforge]`; disabling or unloading the plugin removes the markers and restores the host theme. Brand artwork remains replaceable through the existing `sidebar.brand.*` slots.
