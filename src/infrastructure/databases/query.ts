import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '../../types';

export const query = async (input: QueryDatabaseParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = await client.databases.query(input);

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
