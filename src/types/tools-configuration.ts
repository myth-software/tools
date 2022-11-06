import { Properties } from './properties';

export type ToolsConfiguration = {
  flattenResponse?: boolean;
  resultsOnly?: boolean;
  all?: boolean;
  properties?: Properties;
};

export type ExpandPropertiesConfiguration = ToolsConfiguration & {
  properties: Properties;
};
