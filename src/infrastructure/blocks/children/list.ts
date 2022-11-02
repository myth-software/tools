import { Client } from '@notionhq/client';
import { ListBlockChildrenParameters } from '../../../types';

export const list = async (query: ListBlockChildrenParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });

    return await client.blocks.children.list(query);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
