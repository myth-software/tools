import { retrieve } from './retrieve';

import { ToolsConfiguration } from 'tools/src/types';
import { Sets } from '../../mocks/sets.interface';

describe.skip('pages retrieve', () => {
  test('flatten response', async () => {
    const page = await retrieve<Sets, ToolsConfiguration>(
      { page_id: '' },
      { flattenResponse: true }
    );

    expect(page).toMatchObject({});
  });

  test('no configuration', async () => {
    const page = await retrieve({ page_id: '' });

    expect(page).toMatchObject({});
  });
});
