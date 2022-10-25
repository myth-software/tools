export function assertsIsShapeProperty(value: unknown): asserts value is {
  [key: string]: string | number;
} {
  if (typeof value !== 'string' || typeof value !== 'number') {
    throw new TypeError('not a shape property');
  }
}
