import formidable from 'formidable';
import { H3Event } from 'h3';

export function parseForm(
  event: H3Event
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({});
    form.parse(event.node.req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export function binaryToBase64(buffer: Buffer): string {
  return buffer.toString('base64');
}

export function base64ToBinary(base64: string): Buffer {
  if (base64.startsWith('data:'))
    return Buffer.from(base64.split(',')[1], 'base64');
  return Buffer.from(base64, 'base64');
}
