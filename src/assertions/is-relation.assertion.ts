import { isRelationGuard } from '../guards';

export function assertsIsRelation(
  value: unknown
): asserts value is { id: string }[] {
  if (!isRelationGuard(value)) {
    console.error(value);
    throw new TypeError(
      'relations must be an array of objects with "id" property'
    );
  }
}
