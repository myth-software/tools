export function isShowOriginalRollupFromMultiSelectGuard(value: any) {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const hasCorrectProperties =
    value.hasOwnProperty('function') && value.hasOwnProperty('type');
  if (!hasCorrectProperties) {
    return false;
  }

  const hasCorrectValues =
    value.function === 'show_original' && value.type === 'array';
  if (!hasCorrectValues) {
    return false;
  }

  if (value.array?.[0]?.type !== 'multi_select') {
    return false;
  }

  return true;
}
