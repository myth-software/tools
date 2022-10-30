import { expandProperties } from './expand-properties';
const person = require('../mocks/entities/person.mock.json');

describe('expand properties', () => {
  test('person', () => {
    const properties = expandProperties(person);

    expect(properties).toMatchObject({});
  });
});
