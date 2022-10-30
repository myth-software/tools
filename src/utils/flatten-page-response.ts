import * as assertions from '../assertions';
import { isRollupArrayGuard, isRollupShowOriginalGuard } from '../guards';
import { EntityMap } from '../interfaces';
import { PageObjectResponse } from '../types';
import { formatProperties } from './format-properties';

export const flattenPageResponse = <T = EntityMap>({
  id: page_id,
  properties,
  icon,
}: PageObjectResponse): T => {
  const flat: {
    [key: string]: unknown;
  } = {
    page_id,
    icon: icon?.type === 'emoji' ? icon.emoji : null,
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

        return formatProperties(entity.rollup.array[0]);
      }

      return entity.rollup;
    }

    return formatProperties(entity);
  }
};
