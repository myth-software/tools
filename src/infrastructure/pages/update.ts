import { Client } from '@notionhq/client';
import { flattenPageResponse } from '../../flatteners';
import {
  PageObjectResponse,
  ToolsConfiguration,
  UpdatePageParameters,
} from '../../types';

export const update = async (
  body: UpdatePageParameters,
  config?: ToolsConfiguration
) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = (await client.pages.update(body)) as PageObjectResponse;
    return config?.flattenResponse ? flattenPageResponse(response) : response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
