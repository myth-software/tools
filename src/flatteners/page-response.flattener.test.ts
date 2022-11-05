import { flattenPageResponse } from './page-response.flattener';
const flexin = require('../mocks/organization_flexin/page.mock.json');
const goal = require('../mocks/goal/page.mock.json');
const emptySet = require('../mocks/set_empty/page.mock.json');
const emptyOverlay = require('../mocks/overlay_empty/page.mock.json');
const prize = require('../mocks/prize/page.mock.json');
const person = require('../mocks/person_peter-b-smith/page.mock.json');
const setPage = require('../mocks/set_wildfowl-amaranth/page.mock.json');
const setEntity = require('../mocks/set_wildfowl-amaranth/entity.mock.json');

describe('flatten page response', () => {
  test('organizations', () => {
    const entity = flattenPageResponse(flexin);

    expect(entity).toMatchObject({});
  });

  test('goals', () => {
    const entity = flattenPageResponse(goal);

    expect(entity).toMatchObject({});
  });

  test('empty sets', () => {
    const entity = flattenPageResponse(emptySet);

    expect(entity).toMatchObject({});
  });

  test('sets', () => {
    const entity = flattenPageResponse(setPage);

    expect(entity).toEqual(setEntity);
  });

  test('empty overlay', () => {
    const entity = flattenPageResponse(emptyOverlay);

    expect(entity).toMatchObject({});
  });

  test('prize', () => {
    const entity = flattenPageResponse(prize);

    expect(entity).toMatchObject({});
  });

  test('person', () => {
    const entity = flattenPageResponse(person);

    expect(entity).toMatchObject({});
  });
});
