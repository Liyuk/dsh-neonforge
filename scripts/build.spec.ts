import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { expect, it } from 'vitest'

const buildScript = fileURLToPath(new URL('./build.ts', import.meta.url))
const workspaceRoot = fileURLToPath(new URL('../', import.meta.url))
const tsxLoader = import.meta.resolve('tsx/esm')

it('runs the build entrypoint when launched through the tsx ESM loader', () => {
  const result = spawnSync(process.execPath, ['--import', tsxLoader, buildScript, '--unexpected'], {
    cwd: workspaceRoot,
    encoding: 'utf8',
  })

  expect(result.status, result.stderr).not.toBe(0)
  expect(result.stderr).toContain('Unknown option')
})
