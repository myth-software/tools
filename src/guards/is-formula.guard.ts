export function isFormulaGuard(value: any) {
  if (!value?.formula?.expression && !value?.formula?.string) {
    return false;
  }

  return true;
}
