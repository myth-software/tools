import * as assertions from '../assertions';
import { PROPERTY_TYPES } from '../enums';
import { isRollupArrayGuard, isRollupNumberGuard } from '../guards';
import { Shape } from '../interfaces';
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

export const flattenPageResponse = <T>({
  id: page_id,
  properties,
  icon,
}: PageObjectResponse): T => {
  const flat: {
    _shape: Shape;
    [key: string]: unknown;
  } = {
    _shape: {},
    page_id,
    icon: formatIcon(icon),
  };
  for (const property in properties) {
    const entity = properties[property];
    assertions.assertsIsProperty(entity);
    flat[property] = flatten(entity);
    flat._shape[property] = entity.type;
  }
  return flat as unknown as T;

  function flatten(entity: { type: PROPERTY_TYPES }): unknown {
    if (entity.type === 'rollup') {
      assertions.assertsIsRollup(entity);

      if (isRollupArrayGuard(entity)) {
        assertions.assertsIsRollupArray(entity);
        const array = entity.rollup.array;

        return array.length === 0 ? null : formatProperties(array[0]);
      }

      if (isRollupNumberGuard(entity)) {
        assertions.assertsIsRollupNumber(entity);
        const number = entity.rollup.number;

        return number;
      }

      return entity.rollup;
    }

    return formatProperties(entity);
  }
};
