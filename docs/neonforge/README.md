# Neonforge Project Documentation

English | [中文](README.zh.md)

This is the project documentation entry point for DSH Neonforge. Neonforge is an independent community visual skin plugin for the DeepSeek Harness Web workbench; it keeps DSH Agent runtime, sessions, tools, permissions, workspaces, and plugin composition, and owns only the visual layer and theme presentation.

## Documentation map

| Document | Purpose |
| --- | --- |
| [Project brief](../../project.md) | Project positioning, implementation scope, design rationale, fact boundaries, and Blog material |
| [Community announcement](community-promo.md) | Publication-ready draft for DSH GitHub Discussions, using full project screenshots |
| [UI design reference](../design/neonforge-ui.md) | Visual tokens, layout, components, plugin isolation, and verification rules |
| [Visual research](../design/boujoy-harness-design-analysis.md) | Research sources, adaptation guardrails, and independent implementation boundaries |
| [Community promotion research](../../community-promo-research.md) | DSH official community post structure, disclaimers, and publication requirements |
| [Plugin README](../../plugins/dsh-neonforge/README.md) | Installation, settings, compatibility, and development notes |

## Project structure

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

## How to use the documents

- Writing a Blog post: start with the positioning, design rationale, and short introduction in the [project brief](../../project.md), then take screenshots and technical details as needed.
- Posting to the DSH community: use the [community announcement](community-promo.md), keeping its unofficial notice, install command, integration boundary, and specific feedback questions.
- Explaining the design: link to the [UI design reference](../design/neonforge-ui.md) instead of putting the complete token table and selector rules in the announcement.
- Explaining installation: link to the [plugin README](../../plugins/dsh-neonforge/README.md) instead of duplicating every development command in the project brief.

## Maintenance boundary

The project brief and community announcement serve external writing; the plugin README serves installation and use; the UI design reference serves design and implementation constraints; visual research and community promotion research serve as background material. When a fact changes, update its owning document first and keep only a short explanation and link elsewhere.
