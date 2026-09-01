# Neonforge UI Design Reference

English | [中文](neonforge-ui.zh.md)

## Scope

Neonforge is a visual adaptation of the DSH web workbench. It borrows broad interaction patterns from the public Boujoy Harness presentation while using independent tokens, layout proportions, component styling, copy, and assets. It does not copy source code, brand marks, imagery, fonts, or product naming.

Reference: [Boujoy Harness](https://github.com/asen-goat-mine/boujoy-harness).

The target is the existing DSH client stack. Runtime, session events, RPC, module loading, slot composition, and plugin capabilities remain unchanged.

## Visual direction

- Dark-first local control room with restrained cyberpunk energy.
- Industrial console hierarchy rather than a decorative sci-fi dashboard.
- High contrast is reserved for action, focus, and runtime state.
- Surfaces remain quiet so streamed conversation content stays primary.
- Geometry uses thin rails, clipped corners, compact labels, and occasional hard shadows.
- Decorative treatment is CSS-only and must not add assets or interfere with pointer input.

## Tokens

| Role | Neonforge value | Usage |
|---|---|---|
| Canvas | `#080b10` | App background and empty space |
| Surface | `#111720` | Cards, sidebar groups, composer |
| Raised surface | `#18212c` | Hover, expanded rows, active tool bodies |
| Border | `#2a3946` | Structural separators |
| Primary text | `#ecf5f2` | Conversation and headings |
| Secondary text | `#8fa3a6` | Metadata and supporting copy |
| Action | `#c8ff3d` | Primary actions, focus, active navigation |
| Signal | `#47e3d2` | Healthy, completed, connected |
| Warning | `#ffd166` | Waiting and attention |
| Danger | `#ff4f9a` | Errors, interruption, destructive actions |
| Utility blue | `#5c76ff` | Hard-shadow accent and secondary emphasis |

Spacing uses a 4px base with 8, 12, 16, 24, and 32px steps. Default controls use 4–8px radii; clipped corners are reserved for selected navigation and primary actions. Hard shadows use 4–8px offsets with no blur and are not used on every card.

## Shell standards

The existing DSH `ui-layout` frame remains the owner of the three-column grid and resize behavior. Neonforge changes the visual hierarchy rather than replacing the slot graph.

- Sidebar: context, sessions, and navigation; target width 232–272px when expanded.
- Center: conversation and composer; it receives the strongest contrast and most vertical space.
- Details: runtime and tool observability; it remains optional and collapsible.
- Dividers: one-pixel structural lines with no heavy drop shadow.
- Header labels: compact uppercase/monospace metadata may identify mode and state, but product copy remains readable Chinese.
- Narrow screens: preserve the center column and use existing collapse behavior; do not squeeze three columns into unreadable tracks.

## Component standards

- Navigation active state combines accent color with a shape, offset, or border change; color alone is insufficient.
- Status indicators expose idle, running, waiting, success, and error through both text and a colored LED.
- Conversation messages remain content-first. Tool calls and runtime details use compact cards or the details column rather than mixing operational logs into prose.
- Composer remains continuously discoverable. Busy states communicate queue, interrupt, or continue semantics instead of making the whole input area disappear.
- Primary buttons use an action fill and a short hard shadow. Hover and pressed states move the shadow, not the layout.
- Destructive actions use the danger token and retain explicit confirmation.
- Focus-visible outlines use the action token and remain visible against all surfaces.
- Motion is short and optional; reduced-motion preferences disable decorative transitions and blinking.

## DSH adaptation map

| DSH area | Neonforge treatment | Plugin safety |
|---|---|---|
| `ui-theme` token sheets | Add a scoped global theme layer and semantic aliases | No plugin behavior or slot changes |
| `ui-layout` | Preserve grid, resize handles, and collapse semantics; restyle rails and surfaces | No runtime or store changes |
| `ui-sidebar` | Restyle navigation, session rows, and footer controls | Keep existing props and actions |
| `ui-conversation` | Restyle message, tool, queue, and composer presentation | Keep session object layer and slot registration |
| `ui-tool` / extensions | Apply shared semantic aliases and state colors | Avoid per-plugin global selectors |
| `ui-primitives` | Change only where a shared primitive owns the visual contract | Verify broad blast radius |

## Plugin-style isolation

Neonforge is layered after the base theme through the existing `ui-theme` stylesheet installer. Every selector is scoped to `body[data-dsh-neonforge]` or uses the existing semantic aliases. It does not target plugin IDs, generated class names, or unowned DOM descendants.

Plugin-installed CSS is excluded from the visual baseline audit when it meets one of these conditions:

1. The stylesheet is tagged with `data-plugin` and is not the DSH theme owner.
2. The selector is outside the Neonforge scope and does not consume a Neonforge-specific token.
3. The rule is an intentional shared primitive or platform token change documented in the adaptation map.

A future plugin must not introduce global `body`, `:root`, or element selectors for visual customization. It should consume semantic `--dsw-*` aliases or scope its CSS Module to its own component root.

## Verification checklist

- Build through `pnpm run build`, not a standalone Vite server.
- Run `pnpm run test:gui` for client and host GUI packages.
- Run `DSH_SNAPSHOT=replay pnpm run test:web` for assembled browser output.
- Run `pnpm run dev:web` in the same checkout as `pnpm dsh web` to keep the compiled shell and plugin bundles live.
- Inspect the active page at `http://127.0.0.1:3080` after a refresh; verify that third-party plugin styles remain scoped and functional.
- Check keyboard focus, reduced motion, narrow viewport collapse, empty state, streaming state, tool cards, errors, and settings panels.
