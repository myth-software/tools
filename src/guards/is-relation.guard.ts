export function isRelationGuard(value: unknown) {
  if (!Array.isArray(value)) {
    return false;
  }

  if (typeof value[0] === 'object' && !Object.keys(value[0])?.includes('id')) {
    return false;
  }

  return true;
}
