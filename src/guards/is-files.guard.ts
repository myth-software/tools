export function isFilesGuard(value: unknown) {
  if (!value) {
    return false;
  }

  if (!Array.isArray(value)) {
    return false;
  }

  if (
    value.some(
      (file) => !file.hasOwnProperty('file') && !file.hasOwnProperty('external')
    )
  ) {
    return false;
  }

  return true;
}
