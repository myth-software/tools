import { isRollupShowOriginalGuard } from '../guards';

export function assertsIsRollupShowOriginal(value: unknown): asserts value is {
  rollup: { function: 'show_original' };
} {
  if (!isRollupShowOriginalGuard(value)) {
    throw new TypeError('not a show original roll up from multi select');
  }
}
