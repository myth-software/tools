import { PageObjectResponse } from '../types';
import { flattenPageResponse } from './flatten-page-response';

export function flattenPageResponses<T>(responses: PageObjectResponse[]): T[] {
  return responses.map((response) => flattenPageResponse<T>(response));
}
