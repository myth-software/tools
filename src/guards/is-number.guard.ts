export function isNumberGuard(value: any) {
  if (!value?.number) {
    return false;
  }

  return true;
}
