export function isRollupShowUniqueGuard(value: any) {
  if (value?.rollup?.function !== 'show_unique') {
    return false;
  }

  return true;
}
