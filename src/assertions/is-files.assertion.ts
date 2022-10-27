import { isFilesGuard } from '../guards';

export function assertsIsFiles(value: unknown): asserts value is {
  type: 'external' | 'file';
  external?: {
    url: string;
  };
  file?: {
    url: string;
  };
}[] {
  console.error(value);
  if (!isFilesGuard(value)) {
    throw new TypeError(
      'files be an array of objects with either "file" or "external" properties'
    );
  }
}
