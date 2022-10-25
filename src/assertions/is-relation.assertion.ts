export function assertsIsRelation(
  value: unknown
): asserts value is { id: string }[] {
  if (!Array.isArray(value)) {
    console.error(value);
    throw new TypeError('expected relations not in an array');
  }

  if (typeof value[0] === 'object' && !Object.keys(value[0])?.includes('id')) {
    console.error(value);
    throw new TypeError('expected relation does not include id property');
  }
}
