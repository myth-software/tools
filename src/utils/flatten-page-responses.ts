import { Shape } from '../interfaces';
import { PageObjectResponse } from '../types';
import { flattenPageResponse } from './flatten-page-response';

export function flattenPageResponses<T>(
  shape: Shape,
  responses: PageObjectResponse[]
): T[] {
  return responses.map((response) =>
    flattenPageResponse<T>({ shape, response })
  );
}
