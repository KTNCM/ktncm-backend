import { DataSource, DataSourceOptions } from 'typeorm';
import { databaseConfig } from './database.config';
import { ensureDataDirectory } from './ensure-directory';

export async function createDatabaseConnection(): Promise<DataSource> {
  await ensureDataDirectory();
  
  const dataSource = new DataSource({
    ...databaseConfig,
    type: 'sqlite',
    database: databaseConfig.database,
  } as DataSourceOptions);

  try {
    await dataSource.initialize();
    console.log('Data Source has been initialized!');
    return dataSource;
  } catch (err) {
    console.error('Error during Data Source initialization:', err);
    throw err;
  }
}

export async function clearDatabase(dataSource: DataSource): Promise<void> {
  const entities = dataSource.entityMetadatas;
  
  for (const entity of entities) {
    const repository = dataSource.getRepository(entity.name);
    await repository.clear();
  }
}

export async function closeDatabaseConnection(dataSource: DataSource): Promise<void> {
  if (dataSource?.isInitialized) {
    await dataSource.destroy();
    console.log('Data Source has been closed.');
  }
} 