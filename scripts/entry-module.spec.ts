import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { isEntryModule } from './entry-module.ts'

const moduleUrl = new URL('./entry-module.ts', import.meta.url).href

describe('isEntryModule', () => {
  it('uses the native direct-entry result when available', () => {
    expect(isEntryModule(true, moduleUrl, '/other/script.ts')).toBe(true)
    expect(isEntryModule(false, moduleUrl, moduleUrl)).toBe(false)
  })

  it('matches the launched path when the loader omits import.meta.main', () => {
    expect(isEntryModule(undefined, moduleUrl, '/workspace/entry-module.ts')).toBe(false)
    const launchedPath = fileURLToPath(new URL('./entry-module.ts', import.meta.url))
    expect(isEntryModule(undefined, moduleUrl, launchedPath)).toBe(true)
  })

  it('does not treat an imported module without a launched path as an entrypoint', () => {
    expect(isEntryModule(undefined, moduleUrl, undefined)).toBe(false)
  })
})
