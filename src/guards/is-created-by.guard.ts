export function isCreatedByGuard(value: any) {
  if (!value?.created_by) {
    return false;
  }

  return true;
}
