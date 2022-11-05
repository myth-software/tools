export function flattenFiles(
  files: {
    type: 'external' | 'file';
    external?: {
      url: string;
    };
    file?: {
      url: string;
    };
  }[]
) {
  if (files.length === 0) {
    return null;
  }

  const urls = files.map((file) => {
    if (file.external) {
      return file.external.url;
    }

    return file.file!.url;
  });

  if (urls.length === 1) {
    return urls[0];
  }

  return urls;
}
