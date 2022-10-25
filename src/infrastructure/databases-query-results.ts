import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';

export const databasesQueryResults = async (query: QueryDatabaseParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const { results } = await client.databases.query(query);

    return results as PageObjectResponse[];
  } catch (e) {
    console.error(e);
    throw e;
  }
};
