import { PROPERTY_TYPES } from '../enums';

export function isPropertyGuard(value: any) {
  if (!value) {
    return false;
  }

  if (typeof value !== 'object') {
    return false;
  }

  if (!value.hasOwnProperty('type')) {
    return false;
  }

  if (!Object.values(PROPERTY_TYPES).includes(value.type)) {
    return false;
  }

  if (!Object.keys(PROPERTY_TYPES).includes(value.type)) {
    return false;
  }

  return true;
}
