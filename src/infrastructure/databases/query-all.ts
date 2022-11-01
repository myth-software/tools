import {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { query } from './query';

export const queryAll = async (
  input: QueryDatabaseParameters
): Promise<QueryDatabaseResponse[]> => {
  const response = await query(input);
  const responses = [response];

  if (response.has_more) {
    return responses.concat(
      await queryAll({
        ...input,
        start_cursor: response.next_cursor ?? undefined,
      })
    );
  } else {
    return responses;
  }
};
