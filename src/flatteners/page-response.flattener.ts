import { PageObjectResponse, Properties } from '../types';
import { createProperties } from '../utils';
import { flattenCover } from './cover.flattener';
import { flattenExpandedProperties } from './expanded-properties.flattener';
import { flattenIcon } from './icon.flattener';

/**
 *
 * @param page PageObjectResponse
 * @returns [T, Properties]
 */
export const flattenPageResponse = <T>({
  id: page_id,
  properties,
  icon,
  cover,
}: PageObjectResponse): [T, Properties] => {
  const flat: {
    [key: string]: unknown;
  } = {
    page_id,
    icon: flattenIcon(icon),
    cover: flattenCover(cover),
  };
  for (const property in properties) {
    const entity = properties[property];

    flat[property] = flattenExpandedProperties(entity);
  }
  const constant = createProperties(properties);
  const values = flat as unknown as T;
  return [values, constant];
};
