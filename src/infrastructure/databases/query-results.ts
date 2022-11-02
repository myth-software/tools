import { PageObjectResponse, QueryDatabaseParameters } from '../../types';
import { query } from './query';

export const queryResults = async (input: QueryDatabaseParameters) => {
  const { results } = await query(input);

  return results as PageObjectResponse[];
};
