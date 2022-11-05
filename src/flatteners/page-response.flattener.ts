import { PageObjectResponse } from '../types';
import { flattenCover } from './cover.flattener';
import { flattenExpandedProperties } from './expanded-properties.flattener';
import { flattenIcon } from './icon.flattener';

export const flattenPageResponse = <T>({
  id: page_id,
  properties,
  icon,
  cover,
}: PageObjectResponse): T => {
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
  return flat as unknown as T;
};
