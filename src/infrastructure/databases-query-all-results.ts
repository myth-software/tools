import {
  PageObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { databasesQuery } from './databases-query';
export const databasesQueryAllResults = async (
  input: QueryDatabaseParameters
): Promise<PageObjectResponse[]> => {
  const databaseResponse = await databasesQuery(input);
  const pageResponses = databaseResponse.results as PageObjectResponse[];
  if (databaseResponse.has_more) {
    const nextPageResponses = (await databasesQueryAllResults({
      ...input,
      start_cursor: databaseResponse.next_cursor ?? undefined,
    })) as PageObjectResponse[];

    return pageResponses.concat(nextPageResponses);
  } else {
    return pageResponses as PageObjectResponse[];
  }
};
