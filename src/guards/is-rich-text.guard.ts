export function isRichTextGuard(value: any) {
  if (value?.rich_text?.length === 0) {
    return true;
  }

  if (!value.rich_text?.[0]?.plain_text) {
    return false;
  }

  return true;
}
