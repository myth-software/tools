import { Client } from '@notionhq/client';
import { flattenPageResponse } from '../../flatteners';
import {
  GetPageParameters,
  PageObjectResponse,
  PageReturn,
  ToolsConfiguration,
} from '../../types';

export const retrieve = async <T, K = undefined>(
  query: GetPageParameters,
  config?: ToolsConfiguration
): PageReturn<T, K> => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = (await client.pages.retrieve(query)) as PageObjectResponse;

    if (config?.flattenResponse) {
      return flattenPageResponse<T>(response) as any;
    }

    return response as any;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
