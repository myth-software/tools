export function isFormulaGuard(value: any) {
  if (!value?.formula?.expression) {
    return false;
  }

  return true;
}
