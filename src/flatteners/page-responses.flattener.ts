import { PageObjectResponse } from '../types';
import { flattenPageResponse } from './page-response.flattener';

export function flattenPageResponses<T>(responses: PageObjectResponse[]): T[] {
  return responses.map((response) => flattenPageResponse<T>(response));
}
