import { Client } from '@notionhq/client';
import { DeleteBlockParameters } from '../../types';

export const del = async (input: DeleteBlockParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = await client.blocks.delete(input);

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
