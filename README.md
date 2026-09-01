# DSH Neonforge

DSH Neonforge is a visual-layer fork of the DSH Web workbench. It keeps the existing runtime, plugin composition, and session capabilities while applying a dark industrial console language with restrained cyberpunk accents. It does not copy another project's code, branding, copy, or assets.

See the [Neonforge UI design reference](docs/design/neonforge-ui.md).

Project materials and the community announcement draft are indexed in [docs/neonforge/README.zh.md](docs/neonforge/README.zh.md).

English | [中文](README.zh.md)

## At a glance

Neonforge is an independent community visual skin for the DeepSeek Harness Web profile. It changes the presentation of the workbench while keeping DSH sessions, tools, permissions, workspaces, Agent runtime, and plugin composition intact.

- Dark and light themes with a shared post-punk industrial-console language.
- Stronger hierarchy for workspace folders, sessions, Composer controls, and runtime states.
- Scoped CSS and DSH extension points so the skin does not replace the host runtime.
- A Settings toggle and `prefers-reduced-motion` support for long working sessions.

![DSH Neonforge dark control console](docs/neonforge/assets/neonforge-dark.png)

![DSH Neonforge light paper and ink](docs/neonforge/assets/neonforge-light.png)

## Install

```sh
dsh plugin --profile web add npm:@liyuk/dsh-neonforge
dsh web
```

Open DSH Settings and choose **Neonforge 皮肤** to enable the skin and switch between Dark and Light modes.

For the project brief, design notes, repository map, and community announcement, see the [Neonforge project documentation](docs/neonforge/README.md). The announcement draft is available in [English](docs/neonforge/community-promo.md) and [中文](docs/neonforge/community-promo.zh.md).

DeepSeek Harness (`dsh`) is an open-source agent harness developed by [DeepSeek AI](https://deepseek.com).

It uses an architecture where **everything is a plugin**, and is powered by [Cordis](https://github.com/cordiverse/cordis), whose design is described in [_A Programming Paradigm for Spatiotemporal Composability_](https://github.com/cordiverse/paper).

## Developer preview

DeepSeek Harness is currently in _developer preview_ and is iterating rapidly. **THERE WILL BE COMPATIBILITY-BREAKING CHANGES.**

## Run

### Run from `npm`

Install `Node.js`, then run:

```sh
npx @deepseek-ai/dsh web
```

The command starts the Web UI at `http://127.0.0.1:3080` by default and opens it in the default browser for a local launch. An SSH launch only prints the host URL because the SSH client or editor owns the local forwarded address. Pass `--no-open` to run the server without opening a browser. See [Web UI guide](docs/user/guide/index.md).

### Run from source

To run from a repository checkout:

```sh
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

`pnpm run build` prepares the repository artifacts. `pnpm dsh web` uses those built artifacts without rebuilding.

## Community and support

- Feel free to submit feedback or bug reports through [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions).
- Add the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic to your plugin repository for discoverability.
- Join <a href="https://discord.gg/Ycq5dCaS4">DeepSeek Harness Discord community</a>.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Development

Start with the [development guide](docs/development.md) and [architecture documentation](docs/architecture.md).

For agents, follow [AGENTS.md](AGENTS.md).

## License

[MIT](LICENSE)

Third-party dependencies and their licenses are disclosed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
