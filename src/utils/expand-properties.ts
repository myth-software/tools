import { assertsIsEntityMap } from '../assertions';
import { Properties } from '../types';

export function expandProperties<T>(entity: T): Properties {
  assertsIsEntityMap(entity);

  const shape = entity._shape;
  const properties = Object.keys(entity)
    .filter((key) => key !== '_shape')
    .map((key) => ({
      key,
      type: shape![key],
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
            [key]: {
              files:
                value === null
                  ? []
                  : [
                      {
                        external: {
                          url: value,
                        },
                        name: key,
                        type: 'external',
                      },
                    ],
            },
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
          return {
            ...acc,
            [key]: {
              relation:
                value === null
                  ? []
                  : (value as string[]).map((id: string) => ({ id })),
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
  return properties as unknown as Properties;
}
