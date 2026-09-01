# DSH｜Neonforge｜Post-punk Industrial Console Visual Skin

English | [中文](community-promo.zh.md)

> ⚠️ Unofficial project, independently developed and maintained by the community. DSH Neonforge has not been reviewed, recommended, or endorsed by DeepSeek. Confirm the project source and read the plugin code, permissions, and configuration before installing.

Hi everyone, I built a visual skin plugin for the DeepSeek Harness Web workbench: DSH Neonforge.

If you use DSH for long sessions, it is more than a chat window. The left side contains workspaces and multiple sessions, the center contains streaming conversation and the Composer, and the surrounding UI exposes tools, runtime state, permission mode, and Agent information. The functions are there, but as the information density grows, hierarchy and status are not always easy to scan.

Neonforge is my answer to that problem: it keeps DSH Agent runtime, sessions, tools, permissions, workspaces, and plugin composition, and changes only the visual layer, turning the workbench into a post-punk zine collage with an industrial control-console language.

## What it changes

- Acid-green primary actions with electric-blue registration shadows.
- An ink-blue-black dark control room and a cool paper-and-ink light theme.
- Clearer selected states, clipped corners, and task-ticket styling for workspace and session navigation.
- A quiet conversation area that keeps user messages, Agent replies, and tool results primary.
- Consistent action signals across the Composer, send button, stop button, and focus state.
- Shared visual hierarchy for running, waiting, completed, error, and interrupted states.
- A Neonforge toggle in Settings with Dark / Light mode selection.
- `prefers-reduced-motion` support that disables decorative transitions and blinking when requested.

## What it does not change

Neonforge is a visual layer. It does not replace the DSH Agent loop or modify models, Providers, permission flows, workspace data, or session data. It loads through DSH Web plugin and theme extension points and uses scoped selectors and semantic tokens to minimize interference with other plugins.

## Screenshots

### Dark control console

![DSH Neonforge dark control console](assets/neonforge-dark.png)

### Light paper and ink

![DSH Neonforge light paper and ink](assets/neonforge-light.png)

The task name, model name, balance, elapsed time, and input shown in the screenshots belong to the demo environment; Neonforge does not provide those business capabilities.

## Install

```sh
dsh plugin --profile web add npm:@liyuk/dsh-neonforge
dsh web
```

After starting DSH, open Settings, choose **Neonforge 皮肤**, and switch the skin and Dark / Light mode as needed.

For a local checkout:

```sh
dsh plugin --profile web add link:./plugins/dsh-neonforge
pnpm run build:neonforge-plugin
dsh web
```

## Project links

- GitHub: [Liyuk/dsh-neonforge](https://github.com/Liyuk/dsh-neonforge)
- npm: `@liyuk/dsh-neonforge`
- License: MIT

If you try Neonforge in DSH, I would love to hear:

- Which area needs clearer status feedback?
- Do you prefer Dark or Light?
- Should the next priority be narrow screens, tool states, workspaces, or more theme tokens?
- If a style conflicts with a DSH or plugin version, please include the DSH version, plugin version, and a screenshot.

Neonforge is a visual-layer experiment and an exploration of DSH plugin capabilities: an Agent workbench can gain not only tools and model integrations, but also a new working atmosphere shaped by its community.

Project material:

- [GitHub repository](https://github.com/Liyuk/dsh-neonforge)
- [Project brief](../../project.md)
- [UI design reference](../design/neonforge-ui.md)
