import { flattenPageResponse } from './page-response.flattener';
const flexin = require('../mocks/organization_flexin/page.mock.json');
const goal = require('../mocks/goal/page.mock.json');
const emptySet = require('../mocks/set_empty/page.mock.json');
const emptyOverlay = require('../mocks/overlay_empty/page.mock.json');
const prize = require('../mocks/prize/page.mock.json');
const personPage = require('../mocks/person_peter-b-smith/page.mock.json');
const personEntity = require('../mocks/person_peter-b-smith/entity.mock.json');
const personProperties = require('../mocks/person_peter-b-smith/properties.mock.json');
const setPage = require('../mocks/set_wildfowl-amaranth/page.mock.json');
const setEntity = require('../mocks/set_wildfowl-amaranth/entity.mock.json');
const setProperties = require('../mocks/set_wildfowl-amaranth/properties.mock.json');

describe('flatten page response', () => {
  test('organizations', () => {
    const [entity, properties] = flattenPageResponse(flexin);

    expect(entity).toMatchObject({});
    expect(properties).toMatchObject({});
  });

  test('goals', () => {
    const [entity, properties] = flattenPageResponse(goal);

    expect(entity).toMatchObject({});
    expect(properties).toMatchObject({});
  });

  test('empty sets', () => {
    const [entity, properties] = flattenPageResponse(emptySet);

    expect(entity).toMatchObject({});
    expect(properties).toMatchObject({});
  });

  test('sets', () => {
    const [entity, properties] = flattenPageResponse(setPage);

    expect(entity).toEqual(setEntity);
    expect(properties).toEqual(setProperties);
  });

  test('empty overlay', () => {
    const [entity, properties] = flattenPageResponse(emptyOverlay);

    expect(entity).toMatchObject({});
    expect(properties).toMatchObject({});
  });

  test('prize', () => {
    const [entity, properties] = flattenPageResponse(prize);

    expect(entity).toMatchObject({});
    expect(properties).toMatchObject({});
  });

  test('person', () => {
    const [entity, properties] = flattenPageResponse(personPage);

    expect(entity).toMatchObject(personEntity);
    expect(properties).toMatchObject(personProperties);
  });
});
