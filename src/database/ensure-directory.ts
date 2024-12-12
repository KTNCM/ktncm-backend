import { mkdir } from 'fs/promises';
import { join } from 'path';

export async function ensureDataDirectory() {
  const dataPath = join(__dirname, '..', '..', 'data');
  try {
    await mkdir(dataPath, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
} 