import { eq } from 'drizzle-orm';
import { promises as fs } from 'fs';
import { db } from '~/server/db/postgres';
import { user } from '~/server/db/schema';

export default defineEventHandler(async event => {
  const [data, error] = await $p(parseForm(event));

  if (error) {
    console.error('Failed to parse form', error);
    throw createError('Failed to parse form');
  }

  console.log('Data:', data);


  const file = data?.files?.file?.at(0);

  if (!file) {
    console.error('No file uploaded');
    throw createError('No file uploaded');
  }

  const users = await db.select().from(user);

  console.log('Users:', users);

  const fileContent = await fs.readFile(file.filepath, 'base64');

  // const data = await readFile(file);
  console.log('File:', data?.files);

  //console.log('File content:', data);
  return { base64: fileContent, mimetype: file.mimetype };
});
