import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

export const databasesQuery = async (query: QueryDatabaseParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = await client.databases.query(query);

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
