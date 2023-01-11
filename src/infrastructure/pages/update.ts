import { Client } from '@notionhq/client';
import { flattenPageResponse } from '../../flatteners';
import {
  PageObjectResponse,
  PageReturn,
  ToolsConfiguration,
  UpdatePageParameters,
} from '../../types';

export const update = async <T, K = undefined>(
  body: UpdatePageParameters,
  config?: ToolsConfiguration
): PageReturn<T, K> => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = (await client.pages.update(body)) as PageObjectResponse;

    if (config?.flattenResponse) {
      return flattenPageResponse<T>(response) as any;
    }

    return response as any;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
