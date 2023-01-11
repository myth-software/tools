import { create } from './create';

import { ToolsConfiguration } from 'tools/src/types';
import { Sets } from '../../mocks/sets.interface';

describe.skip('pages create', () => {
  test('flatten response', async () => {
    const page = await create<Sets, ToolsConfiguration>(
      {
        parent: {
          database_id: '',
        },
        properties: {},
      },
      { flattenResponse: true }
    );

    expect(page).toMatchObject({});
  });

  test('no configuration', async () => {
    const page = await create({
      parent: {
        database_id: '',
      },
      properties: {},
    });

    expect(page).toMatchObject({});
  });
});
