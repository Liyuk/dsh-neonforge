#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const plugin = resolve(root, 'plugins/dsh-neonforge')
const css = readFileSync(resolve(root, 'packages/client/ui-theme/src/styles/neonforge.css'), 'utf8')
const template = readFileSync(resolve(plugin, 'lib/client.js'), 'utf8')
mkdirSync(dirname(resolve(plugin, 'lib/client.js')), { recursive: true })
const escaped = css.replaceAll('`', '\\`').replaceAll('\\${', '\\\\${')
const output = template.includes('__NEONFORGE_CSS__')
  ? template.replace('__NEONFORGE_CSS__', escaped)
  : template.replace(/const CSS = String\.raw`[\s\S]*?`/, `const CSS = String.raw\`${escaped}\``)
writeFileSync(resolve(plugin, 'lib/client.js'), output)
console.log(`built ${resolve(plugin, 'lib/client.js')}`)
