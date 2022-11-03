import { Sets } from 'src/mocks/sets.interface';
import { expandProperties } from './expand-properties';
const personEntity = require('../mocks/entities/person_peter-b-smith.mock.json');
const setEntity = require('../mocks/entities/set_wildfowl-amaranth.mock.json');

describe('expand properties', () => {
  test('person', () => {
    const properties = expandProperties(personEntity);

    expect(properties).toMatchObject({});
  });

  test('set', () => {
    const properties = expandProperties<Sets>(setEntity);

    expect(properties).toMatchObject({});
  });
});
