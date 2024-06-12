import { serial, text, timestamp, pgTable, boolean } from 'drizzle-orm/pg-core';

export const User = pgTable('User', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  password: text('password'),
  role: text('role').$type<'admin' | 'customer'>().default('customer'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const AppConfig = pgTable('AppConfig', {
  id: serial('id').primaryKey(),
  allowSingup: boolean('allow_signup').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
