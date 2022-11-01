import { Client } from '@notionhq/client';
import {
  GetPageParameters,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const retrieve = async (query: GetPageParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });

    return (await client.pages.retrieve(query)) as PageObjectResponse;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
