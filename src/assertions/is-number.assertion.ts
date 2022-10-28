import { isNumberGuard } from '../guards';

export function assertsIsNumber(value: unknown): asserts value is {
  number: number;
} {
  if (!isNumberGuard(value)) {
    console.error(value);
    throw new TypeError('not number');
  }
}
