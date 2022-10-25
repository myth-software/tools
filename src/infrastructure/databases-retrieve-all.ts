import { databasesRetrieve } from './databases-retrieve';

export const databasesRetrieveAll = async (ids: string[]) => {
  const promises = ids.map((database_id) => databasesRetrieve({ database_id }));
  return Promise.all(promises);
};
