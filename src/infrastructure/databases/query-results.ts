import { PageObjectResponse, QueryDatabaseParameters } from '../../types';
import { queryResponse } from './query-response';

export const queryResults = async (input: QueryDatabaseParameters) => {
  const { results } = await queryResponse(input);

  return results as PageObjectResponse[];
};
