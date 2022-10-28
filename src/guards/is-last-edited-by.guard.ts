export function isLastEditedByGuard(value: any) {
  if (!value?.last_edited_by) {
    return false;
  }

  return true;
}
