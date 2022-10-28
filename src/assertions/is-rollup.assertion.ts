import { isRollupGuard } from '../guards';

export function assertsIsRollup(value: unknown): asserts value is {
  rollup: string;
} {
  if (!isRollupGuard(value)) {
    console.error(value);
    throw new TypeError('not rollup');
  }
}
