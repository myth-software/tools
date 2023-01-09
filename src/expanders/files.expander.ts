export const expandFiles = (value: unknown, key: string) => {
  if (typeof value === 'string') {
    return {
      files: [
        {
          external: {
            url: value,
          },
          name: key,
          type: 'external',
        },
      ],
    };
  }

  if (Array.isArray(value)) {
    return {
      files: value.map((url) => ({
        external: {
          url,
        },
        name: key,
        type: 'external',
      })),
    };
  }

  return [];
};
