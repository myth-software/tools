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
  if (!isFilesGuard(value)) {
    console.error(value);
    throw new TypeError(
      'files be an array of objects with either "file" or "external" properties'
    );
  }
}
