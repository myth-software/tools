import { PageObjectResponse, Properties } from '../types';

export const createProperties = (
  properties: PageObjectResponse['properties']
): Properties => {
  return Object.keys(properties).reduce((acc, property) => {
    const { type } = properties[property];
    return {
      ...acc,
      [property]: type,
    };
  }, {} as Properties);
};
