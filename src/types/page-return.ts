import { PageObjectResponse } from './api-endpoints';
import { Properties } from './properties';

export type PageReturn<T, K> = Promise<
  K extends undefined ? PageObjectResponse : [T, Properties]
>;
