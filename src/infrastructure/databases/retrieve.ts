import { GetDatabaseParameters, ToolsConfiguration } from '../../types';
import { retrieveResponse } from './retrieve-response';

export const retrieve = async (
  input: GetDatabaseParameters,
  config?: ToolsConfiguration
) => {
  if (!config) {
    return retrieveResponse(input);
  }

  return retrieveResponse(input);
};
