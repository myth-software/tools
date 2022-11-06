import { flattenPageResponses } from 'tools/src/flatteners';
import { QueryDatabaseParameters, ToolsConfiguration } from '../../types';
import { queryAll } from './query-all';
import { queryAllResults } from './query-all-results';
import { queryResponse } from './query-response';
import { queryResults } from './query-results';

export const query = async (
  input: QueryDatabaseParameters,
  config?: ToolsConfiguration
) => {
  if (!config) {
    return await queryResponse(input);
  }
  const flattenResponse = config?.flattenResponse;
  const allResults = config?.all && config?.resultsOnly;
  const all = config?.all;
  const resultsOnly = config?.resultsOnly;

  if (allResults) {
    const results = await queryAllResults(input);
    return flattenResponse ? flattenPageResponses(results) : results;
  }

  if (resultsOnly) {
    const results = await queryResults(input);
    return flattenResponse ? flattenPageResponses(results) : results;
  }

  if (all) {
    return await queryAll(input);
  }

  return await queryResponse(input);
};
