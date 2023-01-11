import { Client } from '@notionhq/client';
import { flattenPageResponse } from '../../flatteners';
import {
  CreatePageParameters,
  PageObjectResponse,
  PageReturn,
  ToolsConfiguration,
} from '../../types';

export const create = async <T, K = undefined>(
  body: CreatePageParameters,
  config?: ToolsConfiguration
): PageReturn<T, K> => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = (await client.pages.create(body)) as PageObjectResponse;

    if (config?.flattenResponse) {
      return flattenPageResponse<T>(response) as any;
    }

    return response as any;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
