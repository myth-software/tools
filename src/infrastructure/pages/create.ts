import { Client } from '@notionhq/client';
import { flattenPageResponse } from '../../flatteners';
import {
  CreatePageParameters,
  PageObjectResponse,
  ToolsConfiguration,
} from '../../types';

export const create = async (
  body: CreatePageParameters,
  config?: ToolsConfiguration
) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = (await client.pages.create(body)) as PageObjectResponse;
    return config?.flattenResponse ? flattenPageResponse(response) : response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
