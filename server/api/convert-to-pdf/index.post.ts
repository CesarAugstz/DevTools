
export default defineEventHandler(async event => {
  const file = await readBody(event);
  // const data = await readFile(file);
  console.log('File:', JSON.parse(file));
  console.log('type of file:', typeof file);
  //console.log('File content:', data);
  return new Response('File content logged to console');
});

async function readFile(file: Blob) {

}
