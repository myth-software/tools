import { DeleteBlockParameters } from '@notionhq/client/build/src/api-endpoints';
import { blocksDelete } from './blocks-delete';

export const blocksDeleteAll = async (
  blocks: DeleteBlockParameters[]
): Promise<void> => {
  while (blocks.length) {
    const block = blocks.splice(0, 1)[0];
    await blocksDelete(block);
  }
};
