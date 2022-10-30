import { flattenPageResponse } from './flatten-page-response';
const flexin = require('../mocks/flexin.mock.json');
const goal = require('../mocks/goal.mock.json');
const emptySet = require('../mocks/empty-set.mock.json');
const emptyOverlay = require('../mocks/empty-overlay.mock.json');
const prize = require('../mocks/prize.mock.json');

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

  test('empty overlay', () => {
    const entity = flattenPageResponse(emptyOverlay);

    expect(entity).toMatchObject({});
  });

  test('prize', () => {
    const entity = flattenPageResponse(prize);

    expect(entity).toMatchObject({});
  });
});