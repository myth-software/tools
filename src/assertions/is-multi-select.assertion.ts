export function assertsIsMultiSelect(
  value: unknown
): asserts value is { name: string }[] {
  if (!Array.isArray(value)) {
    console.error(value);
    throw new TypeError('multi_select must be an array');
  }

  if (
    typeof value[0] === 'object' &&
    !Object.keys(value[0])?.includes('name')
  ) {
    console.error(value);
    throw new TypeError('multi_select objects must have "name" property');
  }
}
