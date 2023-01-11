import { isPropertiesGuard } from '../../guards';
import { Properties } from '../../types';

export function assertsIsProperties(
  value: unknown
): asserts value is Properties {
  if (!isPropertiesGuard(value)) {
    console.error(value);
    throw new TypeError('property must have "type" key');
  }
}
