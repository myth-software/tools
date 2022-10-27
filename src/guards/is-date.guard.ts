export function isDateGuard(value: unknown) {
  const hasCorrectProperties = (value: object) =>
    value.hasOwnProperty('start') &&
    value.hasOwnProperty('end') &&
    value.hasOwnProperty('time_zone');

  if (!value) {
    return false;
  }

  if (typeof value !== 'object') {
    return false;
  }

  if (!hasCorrectProperties(value)) {
    return false;
  }

  return true;
}
