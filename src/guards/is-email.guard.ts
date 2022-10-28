export function isEmailGuard(value: any) {
  if (!value?.email) {
    return false;
  }

  return true;
}
