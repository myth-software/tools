import * as assertions from '../assertions';
import { isRollupArrayGuard, isRollupShowOriginalGuard } from '../guards';
import { EntityMap } from '../interfaces';
import { EmojiRequest, PageObjectResponse } from '../types';
import { formatProperties } from './format-properties';

function formatIcon(
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

export const flattenPageResponse = <T = EntityMap>({
  id: page_id,
  properties,
  icon,
}: PageObjectResponse): T => {
  const flat: {
    [key: string]: unknown;
  } = {
    page_id,
    icon: formatIcon(icon),
  };
  for (const property in properties) {
    const entity = properties[property];
    flat[property] = flatten(entity);
  }
  return flat as unknown as T;

  function flatten(entity: unknown): unknown {
    assertions.assertsIsProperty(entity);

    if (entity.type === 'rollup') {
      assertions.assertsIsRollup(entity);

      if (isRollupShowOriginalGuard(entity) && isRollupArrayGuard(entity)) {
        assertions.assertsIsRollupShowOriginal(entity);
        assertions.assertsIsRollupArray(entity);
        const array = entity.rollup.array;
        return array.length === 0 ? null : formatProperties(array[0]);
      }

      return entity.rollup;
    }

    return formatProperties(entity);
  }
};
