import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  await db.transaction(jate,[readwrite]);
    if (!id === id.content) {
      objectStore('jate').add(content);
      return;
    };
    if (id === id.content) {
      objectStore('jate').put(content);
      return;
    };

    db.transaction.onerror(error, () => {
      console.error('putDb not implemented');
    });
}; 
  
// Add logic for a method that gets all the content from the database
export const getDb = async (content) => {
  await db.transaction(jate, [readonly]);
    if (content = objectStore('jate').getAll()) {
      console.log('getDB implimented successfully');
    return
    } else {
      console.error('getDb not implemented');
    };
};

initdb();
