export function isPeopleGuard(value: any) {
  if (!value?.people) {
    return false;
  }

  return true;
}
