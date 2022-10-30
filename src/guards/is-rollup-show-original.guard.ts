export function isRollupShowOriginalGuard(value: any) {
  if (value?.rollup?.function !== 'show_original') {
    return false;
  }

  return true;
}
