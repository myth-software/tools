export function isTitleGuard(value: any) {
  if (value?.title?.length === 0) {
    return false;
  }
  if (!value.title?.[0]?.plain_text) {
    return false;
  }

  return true;
}
