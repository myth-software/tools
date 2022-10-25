import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  UpdatePageParameters,
} from '@notionhq/client/build/src/api-endpoints';

export const pagesUpdate = async (body: UpdatePageParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });

    return (await client.pages.update(body)) as PageObjectResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
