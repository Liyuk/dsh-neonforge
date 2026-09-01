# DSH Neonforge

English | [中文](README.zh.md)

Neonforge is a visual skin plugin for the DeepSeek Harness Web workbench. It preserves DSH sessions, tools, permissions, workspaces, and plugin composition while restyling the base UI as a post-punk magazine collage control console.

## Highlights

- Acid-green actions with electric-blue registration shadows.
- Dark industrial surfaces, cyan rules, paper labels, and irregular task tickets.
- Larger workspace cards with folder state, session metadata, fold corners, and selected-state motion.
- Composer and primary controls tuned for the same offset-print language.
- Settings tab with an enable switch and two complete palettes: Dark and Light.
- `prefers-reduced-motion` support for task transitions and live indicators.

## Screenshots

### Dark control console

![DSH Neonforge dark theme](assets/neonforge-dark.png)

### Light paper-and-ink theme

![DSH Neonforge light theme](assets/neonforge-light.png)

The dark palette is the default for long sessions and low-light work. The light palette uses cool paper gray, ink text, yellow-green ink, cyan rules, and the same blue registration shadow so the identity remains consistent across modes.

## Install in DSH

The package is published as `dsh-neonforge` and is intended for the DSH Web profile.

```sh
dsh plugin --profile web add npm:dsh-neonforge
dsh web
```

For local development from a checkout:

```sh
dsh plugin --profile web add link:./plugins/dsh-neonforge
pnpm run build:neonforge-plugin
dsh web
```

The package exposes a DSH patch bundle through `cordis.patch.yml`. The client entry is injected after the DSH runtime, UI slots, and UI theme packages, so it styles base components without replacing the session or agent runtime.

## Settings and themes

Open DSH Settings and select **Neonforge 皮肤**. The panel provides:

- A skin switch. Turning it off removes Neonforge markers and restores the previous DSH theme preference.
- Dark and Light palette buttons proxy the native DSH theme setting. Neonforge defaults to dark when DSH is still set to system, then follows every DSH theme change.

Neonforge does not change model, provider, permission, workspace, or session data. It is a presentation layer for DSH base components.

## Design language

Neonforge is intentionally not a generic neon-glow theme. Its visual reference is post-punk zine layout, industrial labeling, terminal status signals, and 1990s print registration errors.

| Token group | Dark | Light |
| --- | --- | --- |
| Canvas | ink blue-black | cool paper gray |
| Primary action | acid green | yellow-green ink |
| Secondary signal | cyan | deep teal |
| Registration layer | electric blue | electric blue |
| Text | pale mint | dark ink |

The design system keeps rounded corners restrained, uses hard offset shadows only on hierarchy anchors, and uses irregular clipping for session tickets rather than decorative glass effects.

## Compatibility

- DSH Web profile.
- Node.js version supported by the installed DSH release.
- The plugin expects the DSH base UI data attributes and ARIA state conventions. If an upstream component changes its role or label, that component may fall back to the normal DSH presentation until the selector is updated.

## Development

From the DSH source checkout:

```sh
pnpm install
pnpm run build:neonforge-plugin
pnpm exec vitest run packages/client/ui-theme/tests/client-styles.client.spec.ts packages/client/ui-conversation/tests/input-bar.client.spec.tsx packages/client/ui-workspace/tests/workspace-browser.client.spec.tsx packages/client/ui-sidebar/tests/sidebar-root.client.spec.tsx
```

The generated client artifact is `lib/client.js`. Run the build script after editing `packages/client/ui-theme/src/styles/neonforge.css`.

## License

MIT. Neonforge is an independent community plugin and is not an official DeepSeek product.
