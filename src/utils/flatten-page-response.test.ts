import { flattenPageResponse } from './flatten-page-response';
const flexin = require('../mocks/flexin.mock.json');
const goal = require('../mocks/goal.mock.json');
describe('flatten page response', () => {
  test('organizations', () => {
    const entity = flattenPageResponse(flexin);

    expect(entity).toMatchObject({});
  });

  test('goals', () => {
    const entity = flattenPageResponse(goal);

    expect(entity).toMatchObject({});
  });
});
