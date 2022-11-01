import { Client } from '@notionhq/client';
import { AppendBlockChildrenParameters } from '@notionhq/client/build/src/api-endpoints';

export const append = async (query: AppendBlockChildrenParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });

    return await client.blocks.children.append(query);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
