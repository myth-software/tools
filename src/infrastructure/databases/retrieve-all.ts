import { retrieve } from './retrieve';

export const retrieveAll = async (ids: string[]) => {
  const promises = ids.map((database_id) => retrieve({ database_id }));
  return Promise.all(promises);
};
