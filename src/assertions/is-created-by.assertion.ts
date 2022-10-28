import { isCreatedByGuard } from '../guards';

export function assertsIsCreatedBy(value: unknown): asserts value is {
  created_by: string;
} {
  if (!isCreatedByGuard(value)) {
    console.error(value);
    throw new TypeError('not created by');
  }
}
