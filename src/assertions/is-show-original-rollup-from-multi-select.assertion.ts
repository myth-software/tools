import { isShowOriginalRollupFromMultiSelectGuard } from '../guards';

export function assertsisShowOriginalRollupFromMultiSelect(
  value: unknown
): asserts value is {
  array: {
    multi_select: {
      name: string;
    }[];
  }[];
} {
  if (!isShowOriginalRollupFromMultiSelectGuard(value)) {
    throw new TypeError('not a show original roll up from multi select');
  }
}
