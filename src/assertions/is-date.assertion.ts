import { isDateGuard } from '../guards';

export function assertsIsDate(value: unknown): asserts value is {
  date: {
    start: string | null;
    end: string | null;
    time_zone: string | null;
  };
} | null {
  if (!isDateGuard(value)) {
    console.error(value);
    throw new TypeError(
      'date must be an object with "start" "end" and "time_zone" properties'
    );
  }
}
