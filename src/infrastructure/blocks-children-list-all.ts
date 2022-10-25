import {
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { blocksChildrenList } from './blocks-children-list';
export const blocksChildrenGetAll = async (
  input: ListBlockChildrenParameters
): Promise<ListBlockChildrenResponse[]> => {
  const response = await blocksChildrenList(input);
  const responses = [response];
  if (response.has_more) {
    return responses.concat(
      await blocksChildrenGetAll({
        ...input,
        start_cursor: response.next_cursor ?? undefined,
      })
    );
  } else {
    return responses;
  }
};
