#!/usr/bin/env node
import { existsSync, lstatSync, mkdirSync, readlinkSync, renameSync, symlinkSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const neonforgeRoot = resolve(import.meta.dirname, '..')
const dshRoot = process.argv[2] === undefined
  ? resolve(neonforgeRoot, '..', 'deepseek-harness-official')
  : resolve(process.argv[2])
const mappings = [
  ['packages/client/ui-layout/src/client/AppFrame.tsx', 'packages/client/ui-layout/src/client/AppFrame.tsx'],
  ['packages/client/ui-theme/src/client/styles.ts', 'packages/client/ui-theme/src/client/styles.ts'],
  ['packages/client/ui-theme/src/styles/neonforge.css', 'packages/client/ui-theme/src/styles/neonforge.css'],
  ['packages/client/ui-conversation/src/client/skeleton/InputBar.tsx', 'packages/client/ui-conversation/src/client/skeleton/InputBar.tsx'],
  ['packages/client/ui-conversation/src/client/skeleton/PermissionSelect.tsx', 'packages/client/ui-conversation/src/client/skeleton/PermissionSelect.tsx'],
  ['packages/client/ui-workspace/src/client/WorkspaceBrowser.tsx', 'packages/client/ui-workspace/src/client/WorkspaceBrowser.tsx'],
  ['packages/client/ui-workspace/src/client/rows/Rows.tsx', 'packages/client/ui-workspace/src/client/rows/Rows.tsx'],
]

if (dshRoot === neonforgeRoot) {
  console.log('live link: target is Neonforge itself; no changes needed')
  process.exit(0)
}

for (const [targetRelative, sourceRelative] of mappings) {
  const target = resolve(dshRoot, targetRelative)
  const source = resolve(neonforgeRoot, sourceRelative)
  if (!existsSync(source)) throw new Error(`live link: missing source ${source}`)
  mkdirSync(dirname(target), { recursive: true })
  if (existsSync(target) || lstatSync(target, { throwIfNoEntry: false }) !== undefined) {
    if (lstatSync(target).isSymbolicLink() && readlinkSync(target) === source) continue
    const backup = `${target}.neonforge-base`
    if (!existsSync(backup)) renameSync(target, backup)
    else throw new Error(`live link: backup already exists at ${backup}`)
  }
  symlinkSync(source, target)
  console.log(`live link: ${targetRelative} -> ${sourceRelative}`)
}
