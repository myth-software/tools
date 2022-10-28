export function isStatusGuard(value: any) {
  if (!value?.status?.name) {
    return false;
  }

  return true;
}
