import { isEntityMapGuard } from '../../guards';
import { EntityMap } from '../../types';

export function assertsIsEntityMap(value: unknown): asserts value is EntityMap {
  if (!isEntityMapGuard(value)) {
    console.error(value);
    throw new TypeError('not entity with shape');
  }
}
