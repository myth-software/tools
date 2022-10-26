export function assertsIsRelation(
  value: unknown
): asserts value is { id: string }[] {
  if (!Array.isArray(value)) {
    console.error(value);
    throw new TypeError('relations must be an array');
  }

  if (typeof value[0] === 'object' && !Object.keys(value[0])?.includes('id')) {
    console.error(value);
    throw new TypeError('relation object must include "id" property');
  }
}
