import { isDateGuard } from 'src/guards';

export function assertsIsDate(value: unknown): asserts value is {
  start: string | null;
  end: string | null;
  time_zone: string | null;
} {
  if (!isDateGuard(value)) {
    console.error(value);
    throw new TypeError(
      'date must be an object with "start" "end" and "time_zone" properties'
    );
  }
}
