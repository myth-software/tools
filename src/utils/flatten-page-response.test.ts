import { flattenPageResponse } from './flatten-page-response';
const flexin = require('../mocks/pages/flexin.mock.json');
const goal = require('../mocks/pages/goal.mock.json');
const emptySet = require('../mocks/pages/empty-set.mock.json');
const emptyOverlay = require('../mocks/pages/empty-overlay.mock.json');
const prize = require('../mocks/pages/prize.mock.json');
const person = require('../mocks/pages/person_peter-b-smith.mock.json');
const setPage = require('../mocks/pages/set_wildfowl-amaranth.mock.json');
const setEntity = require('../mocks/entities/set_wildfowl-amaranth.mock.json');

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
