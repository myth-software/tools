export function isDateGuard(value: unknown) {
  const hasCorrectProperties = (value: object) =>
    value.hasOwnProperty('start') &&
    value.hasOwnProperty('end') &&
    value.hasOwnProperty('time_zone');

  if (value && typeof value === 'object' && !hasCorrectProperties(value)) {
    return false;
  }

  return true;
}
