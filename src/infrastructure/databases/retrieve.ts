import { Client } from '@notionhq/client';
import { GetDatabaseParameters } from '../../types';

export const retrieve = async (query: GetDatabaseParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });

    return await client.databases.retrieve(query);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
