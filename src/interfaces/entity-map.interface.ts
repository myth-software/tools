import { Shape } from './shape.interface';

export interface EntityMap {
  _shape: Shape;
  [key: string]:
    | undefined
    | string
    | number
    | boolean
    | string[]
    | Shape
    | null;
}
