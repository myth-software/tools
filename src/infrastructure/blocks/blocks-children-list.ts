import { Client } from '@notionhq/client';
import { ListBlockChildrenParameters } from '@notionhq/client/build/src/api-endpoints';

export const blocksChildrenList = async (
  query: ListBlockChildrenParameters
) => {
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
