export function flattenDate(date: {
  start: string | null;
  end: string | null;
  time_zone: string | null;
}) {
  if (date === null) {
    return date;
  }

  const isRange = date.start && date.end;

  if (isRange) {
    return `${date.start}/${date.end}`;
  }

  if (date.start) {
    return date.start;
  }

  return date.end;
}
