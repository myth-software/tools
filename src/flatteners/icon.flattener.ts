import { EmojiRequest } from '../types';

export function flattenIcon(
  icon:
    | {
        type: 'emoji';
        emoji: EmojiRequest;
      }
    | {
        type: 'external';
        external: {
          url: string;
        };
      }
    | {
        type: 'file';
        file: {
          url: string;
          expiry_time: string;
        };
      }
    | null
) {
  if (!icon) {
    return null;
  }

  if (icon?.type === 'emoji') {
    return icon.emoji;
  }

  if (icon?.type === 'external') {
    return icon.external.url;
  }

  if (icon?.type === 'file') {
    return icon.file.url;
  }
}
