import { Client } from '@notionhq/client';
import {
  UpdateDatabaseParameters,
  UpdateDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const databasesUpdate = (query: UpdateDatabaseParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    return client.databases.update(query) as Promise<UpdateDatabaseResponse>;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
