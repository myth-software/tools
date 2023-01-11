import { update } from './update';

import { ToolsConfiguration } from 'tools/src/types';
import { Sets } from '../../mocks/sets.interface';

describe.skip('pages update', () => {
  test('flatten response', async () => {
    const page = await update<Sets, ToolsConfiguration>(
      { page_id: '' },
      { flattenResponse: true }
    );

    expect(page).toMatchObject({});
  });

  test('no configuration', async () => {
    const page = await update({ page_id: '' });

    expect(page).toMatchObject({});
  });
});
