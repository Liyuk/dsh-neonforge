# Boujoy Harness Design Language Reference

English | [中文](boujoy-harness-design-analysis.zh.md)

## Scope and evidence

This reference records the visual system of [Boujoy Harness](https://github.com/asen-goat-mine/boujoy-harness) as observed in its public repository at the time of analysis. It is a design-study artifact for the Neonforge workbench, not a statement of affiliation and not a license to reuse Boujoy code, name, logo, imagery, or font files.

The evidence base is the public `web/index.html`, `web/app.css`, supplied image assets, and desktop renders of the Agent and Knowledge pages. Exact values and component behavior described as **observed** come from those sources. The sections headed **adaptation guidance** are inferences for a DSH implementation and must not be treated as Boujoy product requirements.

Boujoy is a local desktop shell around DeepSeek Harness, a local gateway, and a Markdown Vault. Its interface has to present a working conversation, accumulated project context, agent execution state, approvals, files, and optional knowledge tools without making a local tool feel like an ordinary admin dashboard. The visual system makes that promise tangible: it frames an agent task as hands-on production work rather than invisible cloud automation.

## Design read

**Mode:** Operate. The operator must send a task, review streaming work, handle an interruption, and return to prior context quickly. Information scanability and clear state change matter more than brand spectacle.

**Creative north star:** a local punk print shop crossed with a live engineering console. The system borrows the material language of screen printing, taped posters, offset registration, zines, and terminal labels, then applies it to an agent workbench.

**Recommended name:** post-punk, zine-collage cybernetic control console. It has cyberpunk inputs—dark ground, fluorescent chartreuse, electric blue, magenta, terminal labels, and live signal—but rejects the genre's familiar purple-blue gradients, glass panels, city-at-night imagery, and soft tube-light glow. Fluorescence here is opaque ink, not emitted light.

**Emotional register:** assertive, independent, physical, local-first, and slightly confrontational. It avoids the usual soft AI product language. The UI signals that the user owns the workspace and can inspect the work rather than merely prompting a remote black box.

**Density profile:** high functional density in the Agent page, medium density in the library and collection pages, and deliberately low-density moments at onboarding and empty states. Decorative density is also high on desktop, but it retreats substantially on mobile.

**Primary contrast:** the product is built on a near-black stage and pale text. Acid chartreuse is the main action and focus signal. Blue and pink form the screen-print registration pair. Cyan and yellow provide additional semantic or editorial contrast. The palette should never be read as generic “AI neon”: its hard edges, opaque fills, pixel type, and paper-like warm white make it closer to printed ephemera and electronics labeling.

## Visual grammar

### Composition

Desktop uses a persistent left rail, a fixed-height top strip, and page-specific content frames. The Agent page is a three-column workbench: project/session context at left, the task conversation and composer in the center, and live runtime signal at right. The outer rail is 166px wide and the top strip is 72px high in the default CSS. The Agent page uses 238px and 250px side panels around a flexible center column.

This structure communicates a reliable reading order: choose context, do work, inspect consequences. The center column owns the strongest contrast and the greatest vertical span. Side panels are not interchangeable cards; they are persistent work surfaces with different jobs.

The other pages deliberately change their spatial model without discarding the brand. Knowledge uses a wide editorial header, metrics, search and filters, then a split focus/action area and a card library. Experts and styles use collection layouts. Monitoring uses compact metrics and a trajectory list. News uses editorial feed cards. This variation prevents every feature from feeling like another dashboard tab.

### Materiality

The system avoids soft, ambient SaaS elevation. It uses opaque or nearly opaque panels, one-pixel and two-pixel borders, clipped corners, hard unblurred shadows, and occasional slight rotation. These choices imply paper, tape, screen printing, and mechanically registered layers.

The repeated hard-shadow offset is usually 3px to 8px, commonly blue or pink rather than black. A selected or primary object feels physically pushed over an offset print layer. Large blurs appear only as restrained background glass or a mobile composer treatment, not as the core visual signature.

### Decoration

Decoration is structural rather than illustrative: dotted textures, collage backgrounds, geometric shards, skewed labels, crop-like edge cuts, oversized low-opacity numbers, and rotated strips such as “MAKE / BREAK / BUILD”. It creates a continuous visual world around standard interface controls.

This system works because decorative elements sit behind content and are visually subordinate to text and action. The visual language becomes noisy when every list row or status needs a separate accent, rotation, shadow, and label. For a DSH adaptation, decoration should be budgeted per viewport: one large background field, one edge label or shard, and one signal treatment are enough for a working screen.

## Observed token inventory

### Color

| Role | Observed token | Value | Observed use |
| --- | --- | --- | --- |
| Canvas ink | `--ink` | `#080a0d` | Global dark background, dark text on fluorescent fills, deep code/media surfaces. |
| Soft ink | `--ink-soft` | `#12151b` | Secondary dark surface. |
| Paper | `--paper` | `#f1eadc` | Primary light text and light-mode canvas. It is slightly warm rather than pure white. |
| Paper raised | `--paper-2` | `#fffaf0` | Light-mode panel surface. |
| Action acid | `--acid` | `#d2ff00` | Primary buttons, active navigation, keyboard focus, live labels, dominant call to action. |
| Utility blue | `--blue` | `#2439ff` | Hard shadows, structural accents, selection support, collage geometry. |
| Risk pink | `--pink` | `#ff2b8b` | Destructive actions, waiting/interruption state, selected visual contrast, offset shadow. |
| Signal cyan | `--cyan` | `#32e4d2` | Healthy/connected state, contextual chips, secondary positive contrast. |
| Knowledge yellow | `--yellow` | `#ffd629` | Selected session and knowledge-related emphasis. |
| Primary text | `--text` | `#f5efdf` | High-contrast text on dark surfaces. |
| Muted text | `--muted` | `#8f928f` | Supporting metadata, timestamps, unselected controls. |
| Divider | `--line` | `rgba(255, 255, 255, .13)` | Panel separation, subdued control borders. |
| Glass panel | `--panel` | `rgba(12, 14, 18, .91)` | Translucent desktop surface. |
| Solid panel | `--panel-solid` | `#0d1015` | Dense surface and non-transparent fallback. |

Light mode replaces panel, panel-solid, text, muted, and divider values while preserving the saturated accent family. This is a genuine theme transformation, not a simple color inversion.

### Color rules inferred from use

- Acid is the primary action color. It should appear on the control that advances work, the active navigation destination, or the visible keyboard focus. It should not become a generic card fill.
- Blue is the structural offset. It makes hierarchy look printed and registered. It is most effective behind action or selected elements, not as a second default button color.
- Pink has two jobs in the source: danger/waiting state and visual counterweight. An adaptation should retain its danger meaning first and use it decoratively only where the semantic conflict is tolerable.
- Cyan is the best positive-state signal because it remains visually distinct from acid. Use it for connected, completed, or context-attached states rather than for arbitrary category labels.
- Yellow distinguishes knowledge and selected sessions from the main action system. Keep its use limited so it does not compete with acid.
- Dark surfaces are tinted, never pure black. Paper is warm, never pure white. This preserves depth and stops the neon accents from looking detached from the surface.

### Typography

| Role | Observed stack | Typical scale and treatment | Job |
| --- | --- | --- | --- |
| Display | `Arial Black`, `Impact`, `PingFang SC`, sans-serif | 17px to 27px in Agent views; `clamp(40px, 5vw, 60px)` in page heroes | Strong Chinese headings and key actions. |
| Reading | `Inter`, `SF Pro Display`, `PingFang SC`, `Microsoft YaHei`, sans-serif | 10px to 13px, 1.55 to 1.75 line-height | Conversation content, supporting copy, fields. |
| Mono | `SFMono-Regular`, `Menlo`, `Monaco`, `Courier New`, monospace | Often 7px to 10px, high weights and tracking | Operational labels, timestamps, metrics, state. |
| Pixel | self-hosted `FusionPixel` with `PingFang SC` fallback | 9px to 20px in navigation; 40px to 60px page titles | Identity, nav, page heroes, print-shop character. |

The system's personality comes from type contrast rather than from decorative font mixing. Pixel display type makes names and Chinese headings feel like printed game labels. Mono type labels operations and machine state. The reading face remains quiet enough for streamed messages.

**Adaptation guidance:** preserve the three-role model but raise the minimum size for essential information. In a DSH workbench, operational labels should normally be at least 11px, metadata at least 10px, and user/agent prose at least 13px. Restrict the pixel face to navigation, page-level titles, and a few high-salience labels; it is not appropriate for dense system controls or long text.

### Spacing, geometry, and depth

Observed spacing clusters around 4px, 7px, 8px, 9px, 10px, 12px, 14px, 16px, 20px, 22px, 24px, 32px, and 48px. The source does not expose a complete spacing scale, but the recurring cadence is an approximately 4px system with purposeful compact exceptions for printed labels.

Sharpness is the default. Several components use `clip-path` polygons with small diagonal cuts; rotated elements usually remain within about 0.2 to 5 degrees. Circular status dots and close buttons are exceptions because they identify a literal state or direct manipulation control. The desktop system uses almost no generic rounded rectangles.

Hard shadows use opaque offsets with zero blur. A primary cut button uses a 4px blue offset; the large empty Agent state uses a 10px offset; message cards use a 4px blue offset. Hover states commonly reduce an offset while translating the object by 1 to 4px, creating a physical press response.

**Adaptation guidance:** introduce explicit scales before applying this language broadly.

| Token family | Recommended DSH scale | Use |
| --- | --- | --- |
| Spacing | 4, 8, 12, 16, 24, 32, 48, 64px | Control padding, panel rhythm, section gaps. |
| Cut | 0, 4, 8, 12px diagonal cut depth | Use only for primary actions, selected navigation, key cards, and editorial modules. |
| Rotation | 0, ±0.5, ±1, ±2 degrees | Apply to stickers, stamps, and selected objects. Never rotate dense lists or message prose. |
| Hard shadow | 2, 4, 8px zero-blur offset | Reserve for actionable, selected, or important objects. |
| Border | 1px structural, 2px interactive, 3px exceptional | Avoid thick borders on every container. |

## Component language

### App shell and navigation rail

The rail is a dark visual anchor with dot texture, a framed “B” mark, pixel wordmark, six numbered page destinations, a mode switch, and settings. Active navigation uses a high-contrast clipped ticket that extends beyond the rail edge. Each destination keeps its page number, an English operational label, and a Chinese explanation.

The active state combines text color, fill, lateral translation, rotation, clipping, and a hard shadow. It does not rely on color alone. This is a strong pattern worth retaining because the user can identify the selected location from shape and position even when color perception is impaired.

### Agent workbench

The Agent screen has a short identity row, optional thinking strip, scrollable message stream, and bottom composer. Assistant messages are dark outlined blocks with blue hard shadows. User messages are yellow, slightly clipped notes with pink shadow offsets. This direction makes authorship legible at a glance without falling back to conventional chat bubbles.

The center panel's visual hierarchy is correct: content is calm and readable relative to the bright navigation and command controls. Tool summary, completion counts, and token figures are subordinate mono metadata. A streaming cursor and state labels make live work observable.

**Adaptation guidance:** do not convert every DSH message or tool result into a decorative card. Preserve this differentiation: prose is content-first; tool execution is compact structured evidence; approval, interruption, and error receive stronger containers. The center transcript must remain the quietest part of a dense screen.

### Composer

The desktop composer is a clipped dark block with a fluorescent send button, an image control, permission and preset selectors, a model selector, queue/steer mode while busy, and attachment chips. A focus border and alternate pink shadow make the currently writable place unambiguous.

On phone screens, the source deliberately abandons desktop clipping and hard shadows. The composer becomes sticky, rounded, and lightly frosted, text increases to 16px, and touch controls enlarge. This is an important rule: the design language adapts to the physical interface instead of forcing desktop decoration onto touch input.

### State and status

Semantic LED dots appear in service connection, agent run state, pending work, and selected status. Dots are paired with text such as “LOCAL ENGINE · 已连接” and “待命”; they are not the only carrier of state. Running uses acid, online uses cyan, errors and waiting use pink, and an idle dot is muted.

The runtime inspector uses a yellow signal card for the current goal, compact plans, tool records, queues, and subagents. This makes observability visible without shifting it into the main conversation. The pattern is useful for an agent workbench: operational details are close, but they do not interrupt reading.

### Knowledge pages

Knowledge mode changes from the Agent's tight operational layout to an editorial field. It uses large pixel display headlines, contrasting word treatment with blue/pink shadow offsets, plain metrics, large search, cut filter tabs, a focus card, next actions, and a card library. The tonal shift is intentional: browsing accumulated material should feel expansive, while live agent work should feel controlled.

The page preserves the same palette and clipped geometry, so it remains part of one product. In an adaptation, keep this distinction at the layout and density level rather than inventing a separate theme for every feature.

### Collections, metrics, and news

Experts use colorful record cards with index numbers, avatar stamps, status labels, and direct actions. Monitoring uses a more restrained metrics grammar: cards, tabular numbers, segmented meter rows, trajectory lines, and sparse accents. News uses editorial image cards and source/timestamp metadata.

These pages demonstrate a useful pattern: choose a component grammar that fits the task. Collections can afford expressive cards. Metrics require a tighter system. Feeds need image-led hierarchy. A single universal “card” component would erase these differences.

## Responsive model

| Width | Observed behavior | Design intent |
| --- | --- | --- |
| Above 1250px | Three-column Agent workbench; full rail; three-column expert grid. | Persistent context and observability for desktop work. |
| 920px to 1250px | Runtime inspector hides; rail narrows; Agent has context plus center column. | Protect the conversation from over-compression. |
| 820px to 920px | Rail reduces to icon/number treatment; knowledge becomes one column. | Preserve app orientation with less navigation chrome. |
| 820px and below | Side rail disappears; hamburger drawer handles navigation and sessions; Agent context/inspector hide; composer becomes sticky; cards and messages become rounded; content becomes single column. | Preserve task entry and reading comfort on touch screens. |
| 430px and below | Smaller title, tighter composer, single-column content, compact filter controls. | Support foldable cover and narrow phones. |

The most transferable responsive rule is not the exact breakpoint values. It is the prioritization: preserve the current conversation and composer first, move session and navigation work into a drawer, and remove decorative geometry before reducing readable text or squeezing a three-column grid into a phone.

## Motion and interaction

Observed motion is restrained and state-led: blinking run dots, pending dashed movement, a streaming cursor, low-amplitude skeleton opacity, toast entry, image hover zoom, and hard-shadow press behavior. Most transitions are about 0.14 to 0.25 seconds. The interface does not use large parallax, page-transition theater, or continuous ambient animation.

The source includes animation keyframes but no `prefers-reduced-motion` override in the analyzed CSS. A DSH adaptation must add that override. Blinking, cursor motion, skeleton shimmer, and decorative transitions should stop or resolve immediately when reduced motion is requested. Runtime state must still be conveyed with text and color after motion is removed.

## What creates the Boujoy effect

1. Treat local AI work as a physical workshop, not as a glassy cloud dashboard.
2. Use warm off-white and tinted black to make saturated colors feel printed rather than synthetic.
3. Use one dominant action color and reserve the remaining bright colors for defined state or structural roles.
4. Let three type voices divide identity, machine metadata, and readable prose.
5. Use clipped geometry, rotation, and hard shadows as a small set of repeatable signals, not random decoration.
6. Give each application mode a distinct density and layout while keeping the palette and control physics consistent.
7. Keep the live transcript quieter than the controls that start, stop, or interrupt work.
8. Simplify rather than miniaturize on mobile.

## Adaptation guardrails for Neonforge

### Do

- Do retain the dark local-control-room mood, readable warm text, acid action color, cyan health state, pink danger state, and blue offset treatment from [the Neonforge reference](neonforge-ui.md).
- Do preserve DSH's existing layout ownership, slot graph, session data, runtime behavior, and component APIs. This is a styling and composition reference, not a reason to transplant Boujoy's HTML or application model.
- Do use clipped tickets, stamp-like marks, and hard shadows only where they clarify selection, primary action, state change, or feature identity.
- Do keep tool calls, interruptions, queues, and approvals structurally distinct from user and assistant prose.
- Do use semantic aliases such as action, selected, success, warning, danger, canvas, surface, and border rather than importing page-specific color names into every component.
- Do preserve clear focus indicators, text labels beside state dots, keyboard access, touch targets, long-text wrapping, and narrow-screen escape hatches.
- Do add `prefers-reduced-motion` coverage whenever the theme introduces blinking, skeleton motion, cursor animation, or animated offsets.

### Do not

- Do not copy Boujoy's brand mark, name, asset files, FusionPixel font file, screenshots, product copy, or proprietary user content.
- Do not use every accent on every screen. Acid, blue, pink, cyan, and yellow need explicit semantic roles or the workbench becomes visually ambiguous.
- Do not make all cards clipped, rotated, and shadowed. Dense tool logs, lists, and long conversations need quiet surfaces.
- Do not reduce metadata below readable desktop and mobile minimums merely to preserve a terminal aesthetic.
- Do not use a color dot as the sole expression of agent state, permission risk, or a destructive action.
- Do not preserve the desktop's hard-edged geometry on touch screens when it makes composer entry, reading, or selection less comfortable.
- Do not turn the reference's decorative text strips, page numbers, or collage motifs into product-critical navigation or status information.

## Recommended implementation sequence

1. Establish semantic color, typography, spacing, border, cut, shadow, motion, and z-index tokens in the DSH theme layer.
2. Apply the shell treatment to the existing layout frame: canvas, rail, dividers, top strip, and collapse states.
3. Restyle the conversation and composer as the primary operating surface, including empty, streaming, queued, interrupted, error, and attachment states.
4. Add the inspector and tool-result treatments with compact status semantics rather than broad decorative cards.
5. Restyle knowledge, collection, monitoring, and feed screens with task-appropriate component grammars.
6. Verify keyboard focus, contrast, reduced motion, narrow layouts, long content, empty data, streamed updates, errors, and plugin CSS isolation before broadening the theme.

## Initial DSH adaptation: current-session mission ticket

The first implemented navigation treatment is deliberately narrow: the selected DSH session row becomes an irregular, clipped mission ticket inside the existing workspace browser. The left task queue is intentionally spacious: ordinary session tickets have a 48px minimum height for faster scanning and a reliable pointer target, while the current ticket reaches 58px. It combines action green fill, a blue 6px by 5px offset shadow, a small lateral offset, and a non-rectangular silhouette. The selected row also keeps `aria-selected`, so the visual emphasis augments rather than replaces the tree's semantic current state.

The theme targets only owned `data-neonforge-*` hooks on the workspace browser and its session rows. Session selection, reordering, menus, hover cards, rail collapse, and responsive column behavior remain owned by their existing DSH components. Unselected rows stay quiet, while the sidebar adds a low-contrast dot field to establish the control-room context without competing with conversation content.

## Initial DSH adaptation: readable composer controls

The composer now follows the same opaque-ink system as the mission ticket. Its dark surface uses a cyan keyline and one restrained blue offset print shadow; focus switches the keyline to action green so keyboard users can locate the writing surface without a diffuse glow. The textarea keeps a warm off-white ink (`#dbe8e5`) and action-green caret, while placeholder and hint copy use the shared muted token (`#8fa3a6`) rather than low-contrast white.

The add and permission controls use raised dark ink, a four-pixel corner, and cyan-on-hover feedback. Send uses the fluorescent action-green fill with dark ink and a blue offset; stop uses the magenta danger ink. Disabled actions remain opaque with a readable muted foreground instead of inheriting the platform's washed-out opacity. These overrides are scoped to the composer hooks, so unrelated plugin buttons retain their own semantics.

Acceptance is human-vision oriented: verify primary copy, placeholder, focused input, send, stop, disabled, and narrow-screen states in a real DSH render. A color change is not sufficient if a person cannot distinguish text from its surface at normal size; the visual check must include the screenshot and computed foreground/background values.
