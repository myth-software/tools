import { Client } from '@notionhq/client';
import { flattenPageResponse } from '../../flatteners';
import {
  GetPageParameters,
  PageObjectResponse,
  ToolsConfiguration,
} from '../../types';

export const retrieve = async (
  query: GetPageParameters,
  config?: ToolsConfiguration
) => {
  try {
    const client = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: '2022-02-22',
    });
    const response = (await client.pages.retrieve(query)) as PageObjectResponse;
    return config?.flattenResponse ? flattenPageResponse(response) : response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
