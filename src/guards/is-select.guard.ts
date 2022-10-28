export function isSelectGuard(value: any) {
  if (!value?.select?.name) {
    return false;
  }

  return true;
}
