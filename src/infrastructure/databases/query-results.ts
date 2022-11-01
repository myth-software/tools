import {
  PageObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { query } from './query';

export const queryResults = async (input: QueryDatabaseParameters) => {
  const { results } = await query(input);

  return results as PageObjectResponse[];
};
