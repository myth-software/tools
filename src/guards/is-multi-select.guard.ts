export function isMultiSelectGuard(value: unknown) {
  if (!Array.isArray(value)) {
    return false;
  }

  if (
    typeof value[0] === 'object' &&
    !Object.keys(value[0])?.includes('name')
  ) {
    return false;
  }

  return true;
}
