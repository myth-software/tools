export function isTitleGuard(value: any) {
  if (!Array.isArray(value?.title)) {
    return false;
  }

  if (!value?.title?.length && !value.title?.[0]?.plain_text) {
    return false;
  }

  return true;
}
