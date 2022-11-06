import { Client } from '@notionhq/client';
import { UpdateDatabaseParameters, UpdateDatabaseResponse } from '../../types';

export const update = async (query: UpdateDatabaseParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = (await client.databases.update(
      query
    )) as UpdateDatabaseResponse;
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
