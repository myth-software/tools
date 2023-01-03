export function isPeopleGuard(value: any) {
  if (!Array.isArray(value?.people)) {
    return false;
  }

  if (!value?.people?.length && !value.people?.[0]?.name) {
    return false;
  }

  return true;
}
