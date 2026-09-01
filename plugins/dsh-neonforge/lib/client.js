const CSS = String.raw`/* Neonforge: a scoped post-punk control-console skin for DSH base UI. */
body[data-dsh-neonforge] {
  --nf-canvas: #0b1117; --nf-panel: #111b24; --nf-card: #172532; --nf-card-hover: #1d303e;
  --nf-line: #334855; --nf-text: #e3eeeb; --nf-muted: #a3b5b7; --nf-acid: #c5ee52;
  --nf-cyan: #72d8cf; --nf-blue: #5c76ff; --nf-shadow: rgba(44, 119, 116, .28); --nf-code: #0e1820;
  --nf-grid: rgba(114, 216, 207, .24); --nf-tag: #bfc9b3; --nf-on-acid: #152118;
  background: var(--nf-canvas); color: var(--nf-text);
}
body[data-dsh-neonforge][data-neonforge-scheme='light'] {
  --nf-canvas: #e7eeea; --nf-panel: #f0f5f0; --nf-card: #f9fbf5; --nf-card-hover: #e1ece5;
  --nf-line: #9db2ae; --nf-text: #1a292d; --nf-muted: #4e6468; --nf-acid: #a8dc2a;
  --nf-cyan: #087d7c; --nf-blue: #5368ff; --nf-shadow: rgba(39, 105, 99, .2); --nf-code: #e3ece8;
  --nf-grid: rgba(8, 125, 124, .14); --nf-tag: #d3dec8; --nf-on-acid: #182400;
  background: var(--nf-canvas); color: var(--nf-text);
}

/* Portals such as Settings sit outside AppFrame, so they need the same dark
   surface explicitly instead of relying on the active theme presenter. */
body[data-dsh-neonforge] :where([role='dialog'], [data-modal], [data-settings-root]) {
  background: var(--nf-panel) !important;
  color: var(--nf-text) !important;
  border-color: var(--nf-line) !important;
  box-shadow: 0 18px 48px var(--nf-shadow) !important;
}
body[data-dsh-neonforge] :where([role='dialog'], [data-modal], [data-settings-root]) :where(button, input, select, textarea) {
  background: var(--nf-card) !important;
  color: var(--nf-text) !important;
  border-color: var(--nf-line) !important;
}
body[data-dsh-neonforge] :where([role='dialog'], [data-modal], [data-settings-root]) :where(input, select, textarea) {
  border-radius: 8px !important;
  caret-color: var(--nf-acid);
}
body[data-dsh-neonforge] :where([role='dialog'], [data-modal], [data-settings-root]) :where(button) {
  border-radius: 6px !important;
}
body[data-dsh-neonforge] :where([role='dialog'], [data-modal], [data-settings-root]) :where(button:hover) {
  background: var(--nf-card-hover) !important;
  border-color: var(--nf-cyan) !important;
}
body[data-dsh-neonforge] :where([role='dialog'], [data-modal], [data-settings-root]) :where([aria-selected='true'], [aria-pressed='true']) {
  background: var(--nf-card-hover) !important;
  color: var(--nf-acid) !important;
  border-color: var(--nf-cyan) !important;
}
body[data-dsh-neonforge] :where([role='dialog'], [data-modal], [data-settings-root]) :where(h1, h2, h3, [role='heading']) {
  color: var(--nf-text) !important;
}
body[data-dsh-neonforge] [data-neonforge-frame] {
  position: relative; isolation: isolate; margin: 8px; overflow: hidden; border: 1px solid var(--nf-line);
  border-radius: 12px; background: var(--nf-canvas); box-shadow: 0 12px 28px var(--nf-shadow);
}
body[data-dsh-neonforge] [data-neonforge-frame]::before {
  content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none; opacity: .12;
  background-image: radial-gradient(var(--nf-grid) 1px, transparent 1px); background-size: 12px 12px;
  mask-image: linear-gradient(to bottom,#000,transparent 72%);
}
body[data-dsh-neonforge] [data-neonforge-sidebar-shell] {
  position: relative; background: linear-gradient(180deg, color-mix(in srgb, var(--nf-panel) 96%, var(--nf-cyan)), var(--nf-canvas));
  border-right: 1px solid var(--nf-line); overflow: hidden;
}
body[data-dsh-neonforge] [data-neonforge-sidebar-shell]::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .28;
  background-image: radial-gradient(var(--nf-grid) 1px, transparent 1px);
  background-size: 10px 10px; mask-image: linear-gradient(to bottom, #000 0, transparent 28%, transparent 82%, #000 100%);
}
body[data-dsh-neonforge] [data-neonforge-sidebar-shell][data-neonforge-sidebar-mode='wide'] {
  padding-inline: 12px; padding-top: 10px;
}
body[data-dsh-neonforge] [data-neonforge-sidebar-logo] {
  position: relative; z-index: 1; height: 66px; margin-bottom: 12px; padding: 4px 0;
  border-bottom: 1px solid color-mix(in srgb, var(--nf-cyan) 24%, transparent);
}
body[data-dsh-neonforge] [data-neonforge-brand] {
  position: relative; min-height: 38px; padding: 0 12px; border: 1px solid var(--nf-line);
  border-radius: 3px;
  background: linear-gradient(105deg, color-mix(in srgb, var(--nf-acid) 88%, white) 0 62%, var(--nf-acid) 62% 100%) !important;
  color: #152118; box-shadow: 5px 5px 0 var(--nf-blue), 0 8px 18px var(--nf-shadow) !important; overflow: hidden;
}
body[data-dsh-neonforge] [data-neonforge-brand] > span { display: none; }
body[data-dsh-neonforge] [data-neonforge-brand]::before {
  content: 'DSH'; position: relative; z-index: 1; display: block; padding-left: 15px;
  font: 900 21px/36px var(--ds-font-family-code, ui-monospace, monospace); letter-spacing: .06em;
}
body[data-dsh-neonforge] [data-neonforge-brand]::after {
  content: 'NEONFORGE'; position: absolute; right: 10px; top: 8px; width: 78px; height: 20px;
  display: grid; place-items: center; background: var(--nf-tag); color: var(--nf-on-acid);
  font: 700 7px/1 var(--ds-font-family-code, ui-monospace, monospace);
  letter-spacing: .08em; clip-path: polygon(3% 9%, 97% 0, 100% 88%, 0 100%); transform: rotate(-3deg); opacity: .86;
}
body[data-dsh-neonforge] [data-neonforge-brand] > span { color: #152118; }
body[data-dsh-neonforge] [data-neonforge-sidebar-footer]::after {
  content: 'SYS_\\A VER.2.4.7'; white-space: pre; display: block; margin: 8px 2px 0;
  color: var(--nf-acid); font: 700 10px/1.15 var(--ds-font-family-code, ui-monospace, monospace);
  letter-spacing: .12em; opacity: .8;
}
body[data-dsh-neonforge] [data-neonforge-conversation] { min-width: 0; background: var(--nf-canvas); }
body[data-dsh-neonforge] [data-neonforge-details] { background: var(--nf-panel); border-left: 1px solid var(--nf-line); }
body[data-dsh-neonforge] [data-neonforge-conversation] > :first-child { border-bottom: 1px solid var(--nf-line); background: color-mix(in srgb, var(--nf-panel) 92%, var(--nf-canvas)); }
body[data-dsh-neonforge] [data-neonforge-nav-item] {
  min-height: 38px; margin: 4px 10px 4px 4px; border: 1px solid var(--nf-line); border-radius: 3px;
  background: linear-gradient(105deg, color-mix(in srgb, var(--nf-card) 92%, var(--nf-cyan)), var(--nf-panel)); color: var(--nf-muted);
  box-shadow: 0 4px 12px var(--nf-shadow);
}
body[data-dsh-neonforge] [data-neonforge-nav-item]:hover { border-color: var(--nf-cyan); background: var(--nf-card-hover); color: var(--nf-text); }
body[data-dsh-neonforge] button[aria-label='新建会话'],
body[data-dsh-neonforge] button[aria-label='New session'] {
  min-height: 38px; margin: 8px 10px 12px 6px; border: 1px solid var(--nf-acid); border-radius: 4px;
  background: var(--nf-acid) !important; color: #152118;
  box-shadow: 5px 5px 0 var(--nf-blue), 0 7px 16px var(--nf-shadow) !important;
}
body[data-dsh-neonforge] [data-neonforge-workspace-folder] {
  position: relative; min-height: 56px; margin: 10px 8px 5px 4px; padding: 8px 14px 7px 14px;
  border: 1px solid var(--nf-line); border-radius: 4px; background: var(--nf-panel); color: var(--nf-text);
  transition: transform 180ms cubic-bezier(.16,1,.3,1), background-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
}
body[data-dsh-neonforge] [data-neonforge-workspace-folder]:is([data-neonforge-workspace-selected],[aria-expanded='true']) {
  min-height: 62px; background: var(--nf-card) !important; border-color: var(--nf-acid); color: var(--nf-acid);
  box-shadow: 6px 6px 0 var(--nf-blue), 0 8px 18px var(--nf-shadow) !important;
  animation: nf-folder-open 220ms cubic-bezier(.16,1,.3,1) both;
}
body[data-dsh-neonforge] [data-neonforge-workspace-folder]:hover {
  border-color: var(--nf-cyan); transform: translateX(2px);
}
body[data-dsh-neonforge] [data-neonforge-workspace-folder]:is([data-neonforge-workspace-selected],[aria-expanded='true'])::after {
  content: ''; position: absolute; inset: 0 0 auto auto; width: 0; height: 0;
  border-top: 12px solid var(--nf-acid); border-left: 12px solid transparent;
}
body[data-dsh-neonforge] [data-neonforge-workspace-folder]:is([data-neonforge-workspace-selected],[aria-expanded='true'])::before {
  content: ''; position: absolute; inset: 0 auto 0 0; width: 8px;
  background: linear-gradient(180deg, var(--nf-cyan), color-mix(in srgb, var(--nf-cyan) 58%, var(--nf-acid)));
  pointer-events: none;
}
body[data-dsh-neonforge] [data-neonforge-workspace-folder]:is([data-neonforge-workspace-selected],[aria-expanded='true']) [data-neonforge-folder-icon] {
  color: var(--nf-acid);
}
body[data-dsh-neonforge] [data-neonforge-folder-icon] { color: var(--nf-cyan); }
body[data-dsh-neonforge] [data-neonforge-project-text] { align-self: stretch; justify-content: center; gap: 1px; }
body[data-dsh-neonforge] [data-neonforge-project-meta] {
  display: flex; justify-content: space-between; gap: 12px; color: var(--nf-muted);
  font-size: 12px; line-height: 17px; white-space: nowrap;
}
body[data-dsh-neonforge] [data-neonforge-workspace-selected] [data-neonforge-project-meta] { color: #b6c8c4; }
body[data-dsh-neonforge] [data-neonforge-session-list] [data-neonforge-session-ticket] {
  position: relative; min-height: 44px; margin: 5px 8px 5px 16px; padding-inline: 12px;
  border: 1px solid var(--nf-line); border-radius: 3px; background: color-mix(in srgb, var(--nf-panel) 94%, var(--nf-cyan));
  clip-path: polygon(0 7%,98% 0,100% 92%,3% 100%); color: var(--nf-text);
  transition: transform 180ms cubic-bezier(.16,1,.3,1), background-color 180ms ease, color 180ms ease, clip-path 220ms cubic-bezier(.16,1,.3,1), box-shadow 180ms ease;
}
body[data-dsh-neonforge] [data-neonforge-session-list] [data-neonforge-session-ticket][data-neonforge-selected] {
  min-height: 58px; background: var(--nf-acid); border-color: var(--nf-acid); color: var(--nf-on-acid);
  box-shadow: 4px 4px 0 var(--nf-blue), 0 8px 18px var(--nf-shadow); clip-path: polygon(0 9%,95% 0,100% 84%,8% 100%); transform: translateX(3px);
  animation: nf-ticket-lock 260ms cubic-bezier(.16,1,.3,1) both;
}
body[data-dsh-neonforge] [data-neonforge-session-list] [data-neonforge-session-ticket][data-neonforge-selected] :is(button,span) { color: inherit; }
body[data-dsh-neonforge] [data-neonforge-session-list] [data-neonforge-session-ticket]:hover {
  border-color: var(--nf-cyan); transform: translateX(2px);
}
body[data-dsh-neonforge] [data-neonforge-session-list] [data-neonforge-session-ticket]:active {
  transform: translateX(1px) scale(.985);
}
body[data-dsh-neonforge] [data-neonforge-session-list] [data-neonforge-session-ticket][aria-busy='true']::after {
  content: ''; position: absolute; right: 10px; top: 50%; width: 7px; height: 7px; border-radius: 50%;
  background: var(--nf-cyan); box-shadow: 0 0 0 2px color-mix(in srgb, var(--nf-cyan) 20%, transparent);
  transform: translateY(-50%); animation: nf-status-pulse 1.2s ease-in-out infinite;
}
body[data-dsh-neonforge] [data-neonforge-session-list] [data-neonforge-session-ticket][data-status='error'] {
  border-color: #ff6670; color: #ffb2b6;
}
body[data-dsh-neonforge] [data-neonforge-composer] {
  border: 1px solid var(--nf-cyan); border-radius: 10px; background: var(--nf-card);
  box-shadow: 6px 6px 0 var(--nf-blue), 0 10px 24px var(--nf-shadow) !important;
  transition: transform 180ms cubic-bezier(.16,1,.3,1), box-shadow 180ms ease, border-color 180ms ease;
}
body[data-dsh-neonforge] [data-neonforge-composer]:focus-within {
  border-color: var(--nf-acid);
  transform: translateY(-1px);
  box-shadow: 7px 7px 0 var(--nf-blue), 0 14px 26px var(--nf-shadow) !important;
}
body[data-dsh-neonforge] [data-neonforge-composer-input] { color: var(--nf-text); caret-color: var(--nf-acid); }
body[data-dsh-neonforge] [data-neonforge-composer-control],
body[data-dsh-neonforge] [data-neonforge-composer-button] { border-radius: 4px; }
body[data-dsh-neonforge] [data-neonforge-send-button] { background: var(--nf-acid) !important; color: #152118; border-color: var(--nf-acid); }
body[data-dsh-neonforge] [data-neonforge-conversation] [role='tab'][aria-selected='true'] { color: var(--nf-cyan); border-bottom-color: var(--nf-cyan); }
body[data-dsh-neonforge] [data-neonforge-conversation] pre { background: var(--nf-code); border: 1px solid var(--nf-line); }
body[data-dsh-neonforge] [data-neonforge-conversation] :not(pre) > code { background: color-mix(in srgb, var(--nf-card) 82%, var(--nf-cyan)); border: 1px solid color-mix(in srgb, var(--nf-cyan) 36%, transparent); border-radius: 3px; color: var(--nf-text); }
body[data-dsh-neonforge] :where([data-neonforge-composer],[data-neonforge-session-list]) :focus-visible { outline: 2px solid var(--nf-acid); outline-offset: 2px; }
[data-neonforge-skin-tab] { position: relative; }
[data-neonforge-skin-tab][aria-current='true'] { color: var(--nf-acid, var(--dsw-alias-state-business-primary)) !important; background: var(--nf-card-hover, var(--dsw-alias-interactive-bg-hover)) !important; }
[data-neonforge-skin-card] { display: none; margin: 0 18px 18px; padding: 18px; border: 1px solid var(--nf-line, var(--dsw-alias-border-l2)); border-radius: 10px; background: var(--nf-panel, var(--dsw-alias-bg-layer-2)); color: var(--nf-text, var(--dsw-alias-label-primary)); }
[data-neonforge-skin-card][data-neonforge-visible] { display: block; }
[data-neonforge-skin-hidden] { display: none !important; }
[data-neonforge-skin-card] h2 { margin: 0 0 4px; font: 700 18px/1.3 system-ui, sans-serif; }
[data-neonforge-skin-card] p { margin: 0 0 16px; color: var(--nf-muted, var(--dsw-alias-label-secondary)); font-size: 13px; }
[data-neonforge-skin-row] { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 0; border-top: 1px solid color-mix(in srgb, var(--nf-line, var(--dsw-alias-border-l2)) 45%, transparent); }
[data-neonforge-skin-row] strong { display: block; font-size: 14px; }
[data-neonforge-skin-row] small { display: block; margin-top: 3px; color: var(--nf-muted, var(--dsw-alias-label-secondary)); font-size: 12px; }
[data-neonforge-skin-switch] { width: 48px; height: 26px; padding: 2px; border: 1px solid var(--nf-line, var(--dsw-alias-border-l2)); border-radius: 99px; background: var(--nf-card-hover, var(--dsw-alias-interactive-bg-hover)); cursor: pointer; }
[data-neonforge-skin-switch]::after { content: ''; display: block; width: 20px; height: 20px; border-radius: 50%; background: var(--nf-muted, var(--dsw-alias-label-tertiary)); transition: transform 180ms cubic-bezier(.16,1,.3,1), background-color 180ms ease; }
[data-neonforge-skin-switch][aria-pressed='true'] { border-color: var(--nf-acid, var(--dsw-alias-state-business-primary)); background: var(--nf-acid, var(--dsw-alias-state-business-primary)); }
[data-neonforge-skin-switch][aria-pressed='true']::after { background: var(--nf-on-acid, var(--dsw-alias-label-primary-foreground)); transform: translateX(20px); }
[data-neonforge-skin-modes] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; margin-top: 10px; }
[data-neonforge-skin-mode] { min-height: 42px; border: 1px solid var(--nf-line, var(--dsw-alias-border-l2)); border-radius: 6px; background: var(--nf-card, var(--dsw-alias-bg-layer-1)); color: var(--nf-text, var(--dsw-alias-label-primary)); cursor: pointer; font: inherit; }
[data-neonforge-skin-mode][aria-pressed='true'] { border-color: var(--nf-acid, var(--dsw-alias-state-business-primary)); color: var(--nf-acid, var(--dsw-alias-state-business-primary)); box-shadow: 0 6px 14px var(--nf-shadow, transparent); }

@keyframes nf-ticket-lock {
  from { transform: translateX(-4px) rotate(-.6deg); clip-path: polygon(0 7%, 98% 4%, 96% 90%, 3% 100%); box-shadow: 0 0 0 transparent; }
  72% { transform: translateX(4px) rotate(.15deg); }
  to { transform: translateX(3px) rotate(0deg); clip-path: polygon(0 9%, 95% 0, 100% 84%, 8% 100%); box-shadow: 4px 4px 0 var(--nf-blue), 0 8px 18px var(--nf-shadow); }
}

@keyframes nf-folder-open {
  from { transform: translateX(-3px); box-shadow: 0 0 0 transparent; }
  to { transform: translateX(2px); box-shadow: 0 8px 18px var(--nf-shadow); }
}

@keyframes nf-status-pulse {
  0%, 100% { opacity: .45; transform: translateY(-50%) scale(.85); }
  50% { opacity: 1; transform: translateY(-50%) scale(1.15); }
}

@media (prefers-reduced-motion: reduce) {
  body[data-dsh-neonforge] [data-neonforge-session-list] [data-neonforge-session-ticket],
  body[data-dsh-neonforge] [data-neonforge-workspace-folder],
  body[data-dsh-neonforge] [data-neonforge-session-list] [data-neonforge-session-ticket][aria-busy='true']::after { transition: none; animation: none; }
}
`

window.__ModuleLoader__.load({
  id: 'dsh-neonforge',
  factory: function () {
    const name = 'dsh-neonforge'
    const toggleKey = 'dsh-neonforge.enabled'
    let theme
    let previousPreference = 'system'
    let skinSelected = false
    const enabled = () => window.localStorage.getItem(toggleKey) !== '0'
    const scheme = () => theme?.getTheme().resolved === 'light' ? 'light' : 'dark'
    const updateSkinControls = () => {
      document.querySelectorAll('[data-neonforge-skin-switch]').forEach(node => {
        node.setAttribute('aria-pressed', String(enabled()))
      })
      document.querySelectorAll('[data-neonforge-skin-mode]').forEach(node => {
        node.setAttribute('aria-pressed', String(node.getAttribute('data-neonforge-skin-mode') === scheme()))
      })
      document.querySelectorAll('[data-neonforge-skin-card]').forEach(node => {
        node.toggleAttribute('data-neonforge-visible', skinSelected)
        for (const child of node.parentElement?.children || []) {
          if (child === node) continue
          child.toggleAttribute('data-neonforge-skin-hidden', skinSelected)
        }
      })
      document.querySelectorAll('[data-neonforge-skin-tab]').forEach(node => node.setAttribute('aria-current', String(skinSelected)))
    }
    const setScheme = value => {
      if (theme) theme.setTheme(value)
      document.body.setAttribute('data-neonforge-scheme', value)
      updateSkinControls()
    }
    const setEnabled = value => {
      if (value) window.localStorage.removeItem(toggleKey)
      else window.localStorage.setItem(toggleKey, '0')
      document.body.toggleAttribute('data-dsh-neonforge', value)
      if (value) {
        const next = scheme()
        document.body.setAttribute('data-neonforge-scheme', next)
        if (theme) theme.setTheme(next)
      } else {
        document.body.removeAttribute('data-neonforge-scheme')
        if (theme) theme.setTheme(previousPreference)
      }
      updateSkinControls()
    }
    const mountSetting = () => {
      const dialog = [...document.querySelectorAll('[role="dialog"]')].find(node => /设置|Settings/.test(node.textContent || ''))
      if (!dialog) return
      const nav = [...dialog.querySelectorAll('nav, [role="tablist"], aside')].find(node => {
        const rect = node.getBoundingClientRect()
        return rect.left < window.innerWidth * 0.45 && (node.querySelectorAll('button').length > 2)
      })
      if (!nav) return
      const list = nav.querySelector('[class*="navList"]') || nav
      let tab = list.querySelector('[data-neonforge-skin-tab]')
      if (!tab) {
        tab = document.createElement('button'); tab.type = 'button'; tab.dataset.neonforgeSkinTab = ''
        tab.className = list.querySelector('button')?.className || ''
        tab.textContent = 'Neonforge 皮肤'; list.append(tab)
      }
      if (!tab.querySelector('svg')) {
        const referenceIcon = list.querySelector('button svg')
        if (referenceIcon) tab.prepend(referenceIcon.cloneNode(true))
      }
      let card = dialog.querySelector('[data-neonforge-skin-card]')
      const options = dialog.querySelector('[class*="options"]') || [...dialog.children].find(node => node !== nav)
      if (!card && options) {
        card = document.createElement('section'); card.dataset.neonforgeSkinCard = ''
        card.innerHTML = '<h2>Neonforge 皮肤</h2><p>后朋克杂志拼贴式控制台。选择皮肤开关与显示模式。</p><div data-neonforge-skin-row><div><strong>启用皮肤</strong><small>应用侧栏、会话列表与输入区的 Neonforge 视觉语言</small></div><button type="button" data-neonforge-skin-switch aria-label="切换 Neonforge 皮肤"></button></div><div data-neonforge-skin-row><div><strong>配色模式</strong><small>深色更接近控制台，浅色采用旧印刷纸与深墨配色</small></div><div data-neonforge-skin-modes><button type="button" data-neonforge-skin-mode="dark" aria-pressed="true">深色</button><button type="button" data-neonforge-skin-mode="light" aria-pressed="false">浅色</button></div></div>'
        options.append(card)
      }
      if (!dialog.hasAttribute('data-neonforge-skin-bound')) {
        dialog.setAttribute('data-neonforge-skin-bound', '')
        dialog.addEventListener('click', event => {
          const target = event.target instanceof Element ? event.target : null
          if (!target) return
          if (target.closest('[data-neonforge-skin-tab]')) { skinSelected = true; updateSkinControls(); return }
          if (target.closest('[data-neonforge-skin-switch]')) { setEnabled(!enabled()); return }
          const mode = target.closest('[data-neonforge-skin-mode]')
          if (mode) { setScheme(mode.getAttribute('data-neonforge-skin-mode') === 'light' ? 'light' : 'dark'); return }
          if (target.closest('nav button, [role="tablist"] button')) { skinSelected = false; updateSkinControls() }
        })
      }
      updateSkinControls()
    }
    const decorate = () => {
      document.querySelectorAll('[style*="grid-template-columns"]').forEach(frame => {
        frame.setAttribute('data-neonforge-frame', '')
        frame.children[0]?.setAttribute('data-neonforge-sidebar', '')
        frame.children[0]?.setAttribute('data-neonforge-sidebar-shell', '')
        frame.children[1]?.setAttribute('data-neonforge-conversation', '')
        frame.children[2]?.setAttribute('data-neonforge-details', '')
      })
      document.querySelectorAll('[data-neonforge-sidebar-shell]').forEach(sidebar => {
        sidebar.querySelector(':scope > div:first-child')?.setAttribute('data-neonforge-sidebar-logo', '')
        sidebar.querySelector(':scope > div:last-child')?.setAttribute('data-neonforge-sidebar-footer', '')
        sidebar.querySelector('[aria-label="新建会话"], [aria-label="New session"]')?.setAttribute('data-neonforge-brand', '')
      })
      document.querySelectorAll('[role="tree"]').forEach(tree => {
        const label = tree.getAttribute('aria-label') || ''
        if (label === '会话' || label.toLowerCase() === 'sessions') tree.setAttribute('data-neonforge-session-list', '')
      })
      document.querySelectorAll('[data-composer-card]').forEach(card => {
        card.setAttribute('data-neonforge-composer', '')
        card.querySelector('textarea')?.setAttribute('data-neonforge-composer-input', '')
        card.querySelectorAll('button').forEach(button => {
          const label = button.getAttribute('aria-label') || ''
          if (label === '命令' || label.includes('访问模式')) button.setAttribute('data-neonforge-composer-control', '')
          if (label.includes('发送消息')) {
            button.setAttribute('data-neonforge-composer-button', '')
            button.setAttribute('data-neonforge-send-button', '')
          }
          if (label.includes('停止')) button.setAttribute('data-neonforge-stop-button', '')
        })
      })
      document.querySelectorAll('button').forEach(button => {
        const label = button.getAttribute('aria-label') || ''
        if (label === '任务看板' || label === 'SSH' || label === 'Skill Center' || label === '技能中心') {
          button.setAttribute('data-neonforge-nav-item', '')
        }
      })
      document.querySelectorAll('[role="treeitem"][aria-expanded]').forEach(row => {
        row.setAttribute('data-neonforge-workspace-folder', '')
        row.querySelector('[class*="projectText"]')?.setAttribute('data-neonforge-project-text', '')
        row.querySelector('[class*="projectMeta"]')?.setAttribute('data-neonforge-project-meta', '')
        if (row.querySelector('[aria-selected="true"]')) row.setAttribute('data-neonforge-workspace-selected', '')
        else row.removeAttribute('data-neonforge-workspace-selected')
      })
      document.querySelectorAll('[role="treeitem"]').forEach(row => {
        if (row.hasAttribute('aria-expanded')) return
        row.setAttribute('data-neonforge-session-ticket', '')
        if (row.getAttribute('aria-selected') === 'true') row.setAttribute('data-neonforge-selected', '')
        else row.removeAttribute('data-neonforge-selected')
      })
      if (enabled()) {
        document.body.setAttribute('data-dsh-neonforge', '')
        document.body.setAttribute('data-neonforge-scheme', scheme())
      }
      mountSetting()
    }
    function apply(ctx) {
      theme = ctx.get('theme')
      previousPreference = theme.getTheme().preference
      if (enabled() && previousPreference === 'system') theme.setTheme('dark')
      if (enabled()) {
        document.body.setAttribute('data-dsh-neonforge', '')
        document.body.setAttribute('data-neonforge-scheme', scheme())
      }
      const style = document.createElement('style')
      style.dataset.plugin = name
      style.textContent = CSS
      document.head.appendChild(style)
      decorate()
      ctx.on('theme/change', snapshot => {
        if (!enabled()) return
        const next = snapshot.resolved === 'light' ? 'light' : 'dark'
        document.body.setAttribute('data-neonforge-scheme', next)
        updateSkinControls()
      })
      const observer = new MutationObserver(decorate)
      observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['aria-selected'] })
      ctx.effect(() => () => {
        observer.disconnect()
        style.remove()
        document.body.removeAttribute('data-dsh-neonforge')
        document.body.removeAttribute('data-neonforge-scheme')
        theme?.setTheme(previousPreference)
        document.querySelector('[data-neonforge-skin-card]')?.remove()
        document.querySelector('[data-neonforge-skin-tab]')?.remove()
        document.querySelectorAll('[data-neonforge-skin-bound]').forEach(node => node.removeAttribute('data-neonforge-skin-bound'))
        document.querySelectorAll('[data-neonforge-frame], [data-neonforge-sidebar], [data-neonforge-sidebar-shell], [data-neonforge-sidebar-mode], [data-neonforge-sidebar-logo], [data-neonforge-sidebar-footer], [data-neonforge-brand], [data-neonforge-sidebar-browser], [data-neonforge-project-text], [data-neonforge-project-meta], [data-neonforge-conversation], [data-neonforge-details], [data-neonforge-session-list], [data-neonforge-session-ticket], [data-neonforge-workspace-folder], [data-neonforge-workspace-selected], [data-neonforge-folder-icon], [data-neonforge-nav-item], [data-neonforge-composer], [data-neonforge-composer-input], [data-neonforge-composer-control], [data-neonforge-composer-button], [data-neonforge-send-button], [data-neonforge-stop-button]').forEach(node => {
          for (const attr of [...node.attributes]) if (attr.name.startsWith('data-neonforge-')) node.removeAttribute(attr.name)
        })
      })
    }
    return { name, apply }
  }
})
