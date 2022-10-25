import { assertsIsRelation, assertsIsShapeProperty } from '../assertions';
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

    function dig(entity: unknown, props: (string | number)[]): unknown {
      assertsIsShapeProperty(entity);
      if (props.length > 0) {
        const property = props.shift() as string | number;
        let result: unknown;
        result = entity[property];

        /**
         * workaround for handling files that have been uploaded internally in notion
         */
        if (property === 'external' && !entity[property]) {
          result = entity['file'];
        }

        if (property === 'relation') {
          assertsIsRelation(result);
          result = result.map(({ id }) => id);
          return result;
        }

        if (!result) {
          return null;
        }
        return dig(result, props);
      } else {
        return entity;
      }
    }
  };
