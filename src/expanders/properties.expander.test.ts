import { Sets } from '../mocks/sets.interface';
import { expandProperties } from './properties.expander';
const personEntity = require('../mocks/person_peter-b-smith/entity.mock.json');
const personProperties = require('../mocks/person_peter-b-smith/properties.mock.json');
const setEntity = require('../mocks/set_wildfowl-amaranth/entity.mock.json');
const setProperties = require('../mocks/set_wildfowl-amaranth/properties.mock.json');

describe('expand properties', () => {
  test('person', () => {
    const properties = expandProperties(personEntity, {
      properties: personProperties,
    });

    expect(properties).toMatchObject({});
  });

  test('set', () => {
    const properties = expandProperties<Sets>(setEntity, {
      properties: setProperties,
    });

    expect(properties).toMatchObject({});
  });
});
