export function isPhoneNumberGuard(value: any) {
  if (!value?.phone_number) {
    return false;
  }

  return true;
}
