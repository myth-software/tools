import { assertsIsEntityMap } from '../assertions';
import { ExpandedProperties, ExpandPropertiesConfiguration } from '../types';
import { expandFiles } from './files.expander';

export function expandProperties<T>(
  entity: T,
  config: ExpandPropertiesConfiguration
): ExpandedProperties {
  assertsIsEntityMap(entity);

  const properties = config.properties;
  const expandedProperties = Object.keys(entity)
    .map((key) => ({
      key,
      type: properties[key],
    }))
    .reduce((acc, { key, type }: { key: string; type: string }) => {
      const value = entity[key];
      if (value === undefined) {
        return acc;
      }

      switch (type) {
        case 'title':
          return {
            [key]: {
              title:
                value === null
                  ? []
                  : [
                      {
                        text: {
                          content: value,
                        },
                      },
                    ],
            },
            ...acc,
          };
        case 'number':
          return {
            [key]: {
              number: value,
            },
            ...acc,
          };
        case 'rich_text':
          return {
            [key]: {
              rich_text:
                value === null
                  ? []
                  : [
                      {
                        type: 'text',
                        text: {
                          content: value,
                        },
                      },
                    ],
            },
            ...acc,
          };
        case 'files':
          return {
            [key]: expandFiles(value, key),
            ...acc,
          };
        case 'email': {
          return {
            [key]: {
              email: value,
            },
            ...acc,
          };
        }
        case 'url': {
          return {
            [key]: {
              url: value,
            },
            ...acc,
          };
        }
        case 'checkbox': {
          return {
            [key]: {
              checkbox: value,
            },
            ...acc,
          };
        }
        case 'phone_number': {
          return {
            [key]: {
              phone_number: value,
            },
            ...acc,
          };
        }
        case 'relation': {
          const relation = value as string[];
          if (relation === null || relation.length === 0) {
            return {
              ...acc,
              [key]: {
                relation: [],
              },
            };
          }

          return {
            ...acc,
            [key]: {
              relation: relation.map((id: string) => ({ id })),
            },
          };
        }
        case 'status': {
          return {
            ...acc,
            [key]: { status: value === null ? value : { name: value } },
          };
        }
        case 'select': {
          return {
            ...acc,
            [key]: { select: value === null ? value : { name: value } },
          };
        }
        default: {
          return acc;
        }
      }
    }, {} as T);
  return expandedProperties as unknown as ExpandedProperties;
}
