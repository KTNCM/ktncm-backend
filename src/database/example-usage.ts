import { 
  createDatabaseConnection, 
  clearDatabase, 
  closeDatabaseConnection 
} from './database.utils';

async function example() {
  const dataSource = await createDatabaseConnection();
  try {
    // Do something with the database
    await clearDatabase(dataSource); // Clear all tables
  } finally {
    await closeDatabaseConnection(dataSource);
  }
}

export default example; 