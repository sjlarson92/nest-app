import { db, initializeDatabase, resetDatabase } from '../../test/db';

beforeAll(() => {
  initializeDatabase();
});

afterEach(() => {
  resetDatabase();
});

afterAll(() => {
  db.close();
});
