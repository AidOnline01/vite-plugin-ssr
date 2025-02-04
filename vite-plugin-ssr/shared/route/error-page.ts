import { assert, assertUsage } from '../utils'

export { getErrorPageId }
export { isErrorPage }

function getErrorPageId(allPageIds: string[]): string | null {
  const errorPageIds = allPageIds.filter((pageId) => isErrorPage(pageId))
  assertUsage(
    errorPageIds.length <= 1,
    `Only one \`_error.page.js\` is allowed. Found several: ${errorPageIds.join(' ')}`
  )
  if (errorPageIds.length > 0) {
    const errorPageId = errorPageIds[0]
    assert(errorPageId)
    return errorPageId
  }
  return null
}

function isErrorPage(pageId: string): boolean {
  assert(!pageId.includes('\\'))
  return pageId.includes('/_error')
}
