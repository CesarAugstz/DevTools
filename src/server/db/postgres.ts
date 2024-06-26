import pkg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

const { Pool } = pkg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool);
