import { DeleteBlockParameters } from '@notionhq/client/build/src/api-endpoints';
import { del } from './delete';

export const deleteAll = async (
  blocks: DeleteBlockParameters[]
): Promise<void> => {
  while (blocks.length) {
    const block = blocks.splice(0, 1)[0];
    await del(block);
  }
};