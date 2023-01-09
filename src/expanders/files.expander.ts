export const expandFiles = (value: unknown) => {
  if (typeof value === 'string') {
    return {
      files: [
        {
          external: {
            url: value,
          },
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
        type: 'external',
      })),
    };
  }

  return [];
};
