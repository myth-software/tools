import { Client } from '@notionhq/client';
import { GetDatabaseParameters } from '../../types';

export const retrieveResponse = async (query: GetDatabaseParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = await client.databases.retrieve(query);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
