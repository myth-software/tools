import {
  assertsIsDate,
  assertsIsFiles,
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

    function formatFiles(
      files: {
        type: 'external' | 'file';
        external?: {
          url: string;
        };
        file?: {
          url: string;
        };
      }[]
    ) {
      const urls = files.map((file) => {
        if (file.external) {
          return file.external.url;
        }

        return file.file!.url;
      });

      return urls.length === 1 ? urls[0] : urls;
    }

    function dig(entity: any, shapeProperties: (string | number)[]): unknown {
      if (shapeProperties.length > 0) {
        const shapeProperty = shapeProperties.shift() as string | number;
        const result: unknown = entity[shapeProperty];

        if (!result) {
          return null;
        }

        if (shapeProperty === 'files') {
          assertsIsFiles(result);

          return formatFiles(result);
        }

        if (shapeProperty === 'relation') {
          assertsIsRelation(result);

          return formatRelation(result);
        }

        if (shapeProperty === 'multi_select') {
          assertsIsMultiSelect(result);

          return formatMultiSelect(result);
        }

        if (shapeProperty === 'date') {
          assertsIsDate(result);

          return formatDate(result);
        }

        if (isShowOriginalRollupFromMultiSelectGuard(result)) {
          assertsisShowOriginalRollupFromMultiSelect(result);

          return formatMultiSelect(result.array[0].multi_select);
        }

        return dig(result, shapeProperties);
      } else {
        return entity;
      }
    }
  };
