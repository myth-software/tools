export function assertsIsShapeProperty(value: unknown): asserts value is {
  [key: string]: string | number | string[];
} {
  if (typeof value !== 'string' || typeof value !== 'number') {
    throw new TypeError('not a shape property');
  }

  if (Array.isArray(value) && typeof value[0] !== 'string') {
    throw new TypeError('not a shape property');
  }
}
