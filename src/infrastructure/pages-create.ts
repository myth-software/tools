import { Client } from '@notionhq/client';
import {
  CreatePageParameters,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const pagesCreate = (body: CreatePageParameters) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    return client.pages.create(body) as Promise<PageObjectResponse>;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
