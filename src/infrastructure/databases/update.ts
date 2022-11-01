import { Client } from '@notionhq/client';
import {
  UpdateDatabaseParameters,
  UpdateDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const update = (query: UpdateDatabaseParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    return client.databases.update(query) as Promise<UpdateDatabaseResponse>;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
