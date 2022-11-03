export function isEntityMapGuard(value: any) {
  if (!value._shape) {
    return false;
  }

  return true;
}
