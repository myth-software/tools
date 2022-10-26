import {
  assertsIsMultiSelect,
  assertsIsRelation,
  assertsisShowOriginalRollupFromMultiSelect,
} from '../assertions';
import { isShowOriginalRollupFromMultiSelectGuard } from '../guards';
import { Shape } from '../interfaces';
import { PageObjectResponse } from '../types';

export const flattenPageResponse =
  <T>(shape: Shape) =>
  ({ id: page_id, properties }: PageObjectResponse): T => {
    const flat: {
      [key: string]: unknown;
    } = {
      page_id,
    };
    for (const key in shape) {
      flat[key] = dig(properties[key], [...shape[key]]);
    }
    return flat as unknown as T;

    function dig(entity: any, shapeProperties: (string | number)[]): unknown {
      if (shapeProperties.length > 0) {
        const shapeProperty = shapeProperties.shift() as string | number;
        let result: unknown;
        result = entity[shapeProperty];

        /**
         * workaround for handling files that have been uploaded internally in notion
         */
        if (shapeProperty === 'external' && !entity[shapeProperty]) {
          result = entity['file'];
        }

        if (shapeProperty === 'relation') {
          assertsIsRelation(result);
          result = result.map(({ id }) => id);
          return result;
        }

        if (shapeProperty === 'multi_select') {
          assertsIsMultiSelect(result);
          result = result.map(({ name }) => name);
          return result;
        }

        if (shapeProperty === 'rollup') {
          if (!isShowOriginalRollupFromMultiSelectGuard(result)) {
            return result;
          }
          assertsisShowOriginalRollupFromMultiSelect(result);

          return result.array[0].multi_select.map(({ name }) => name);
        }

        if (!result) {
          return null;
        }
        return dig(result, shapeProperties);
      } else {
        return entity;
      }
    }
  };
