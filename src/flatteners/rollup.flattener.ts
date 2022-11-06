import {
  assertsIsRollup,
  assertsIsRollupArray,
  assertsIsRollupNumber,
} from '../assertions';
import { isRollupArrayGuard, isRollupNumberGuard } from '../guards';
import { flattenExpandedProperties } from './expanded-properties.flattener';

export function flattenRollup(entity: unknown): any {
  assertsIsRollup(entity);

  if (isRollupArrayGuard(entity)) {
    assertsIsRollupArray(entity);
    const array = entity.rollup.array;

    return array.length === 0 ? null : flattenExpandedProperties(array[0]);
  }

  if (isRollupNumberGuard(entity)) {
    assertsIsRollupNumber(entity);
    const number = entity.rollup.number;

    return number;
  }

  return entity.rollup;
}
