export function isUrlGuard(value: any) {
  if (!value?.url) {
    return false;
  }

  return true;
}
