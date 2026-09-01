import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Check whether a module is being launched as a script rather than imported.
 * @param nativeMain - Node's native direct-entry result when available.
 * @param moduleUrl - URL of the module being checked.
 * @param launchedPath - process argument identifying the launched script.
 * @returns Whether the module is the launched entrypoint.
 */
export function isEntryModule(
  nativeMain: boolean | undefined,
  moduleUrl: string,
  launchedPath = process.argv[1],
): boolean {
  return nativeMain ?? (
    launchedPath !== undefined && resolve(launchedPath) === fileURLToPath(moduleUrl)
  )
}
