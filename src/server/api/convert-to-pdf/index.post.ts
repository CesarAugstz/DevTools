import { binaryToBase64, parseForm } from '../../utils/fileUtils';
import { $p } from '../../utils/utils';
import { promises as fs } from 'fs';

export default defineEventHandler(async event => {
  const [data, error] = await $p(parseForm(event));

  if (error) {
    console.error('Failed to parse form', error);
    throw createError('Failed to parse form');
  }

  console.log('Data:', data);

  const file = data?.files?.file[0];

  if (!file) {
    console.error('No file uploaded');
    throw createError('No file uploaded');
  }

  const fileContent = await fs.readFile(file.filepath, 'base64');

  // const data = await readFile(file);
  console.log('File:', data?.files);

  //console.log('File content:', data);
  return { base64: fileContent, mimetype: file.mimetype };
});
