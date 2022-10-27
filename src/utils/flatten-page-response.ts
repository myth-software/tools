import {
  assertsIsDate,
  assertsIsMultiSelect,
  assertsIsRelation,
  assertsisShowOriginalRollupFromMultiSelect,
} from '../assertions';
import {
  isDateGuard,
  isMultiSelectGuard,
  isRelationGuard,
  isShowOriginalRollupFromMultiSelectGuard,
} from '../guards';
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

    function formatDate(date: {
      start: string | null;
      end: string | null;
      time_zone: string | null;
    }) {
      const isRange = date.start && date.end;

      if (isRange) {
        return `${date.start}/${date.end}`;
      }

      if (date.start) {
        return date.start;
      }

      return date.end;
    }

    function formatMultiSelect(
      multi_select: {
        name: string;
      }[]
    ) {
      return multi_select.map(({ name }) => name);
    }

    function formatRelation(
      relation: {
        id: string;
      }[]
    ) {
      return relation.map(({ id }) => id);
    }

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

        if (isRelationGuard(result)) {
          assertsIsRelation(result);
          return formatRelation(result);
        }

        if (isMultiSelectGuard(result)) {
          assertsIsMultiSelect(result);

          return formatMultiSelect(result);
        }

        if (isDateGuard(result)) {
          assertsIsDate(result);

          return formatDate(result);
        }

        if (isShowOriginalRollupFromMultiSelectGuard(result)) {
          assertsisShowOriginalRollupFromMultiSelect(result);

          return formatMultiSelect(result.array[0].multi_select);
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
