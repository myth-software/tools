import { Client } from '@notionhq/client';
import { GetPagePropertyParameters } from '../../../types';

export const retrieve = async (query: GetPagePropertyParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });

    return await client.pages.properties.retrieve(query);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
