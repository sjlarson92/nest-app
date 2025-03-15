import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database(':memory:');

export const initializeDatabase = () => {
  db.serialize(() => {
    db.run(
      'CREATE TABLE employee (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, role TEXT, createAt DATE, updatedAt DATE)',
    );
  });
};

export const resetDatabase = () => {
  db.serialize(() => {
    db.run('DROP TABLE IF EXISTS employee');
    initializeDatabase();
  });
};

test('', () => {});
