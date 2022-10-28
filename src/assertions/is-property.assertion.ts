import { PROPERTY_TYPES } from '../enums';
import { isPropertyGuard } from '../guards';

export function assertsIsProperty(
  value: unknown
): asserts value is { type: PROPERTY_TYPES } {
  if (!isPropertyGuard(value)) {
    console.error(value);
    throw new TypeError('property must have "type" key');
  }
}
