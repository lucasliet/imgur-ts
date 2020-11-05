import { Client } from '@rmp135/imgur';
import FileStream from 'fs';
/**
 * Uploads a Image to Imgur asynchronous and returns the image url
 * @param filepath filepath of the image file you want to upload
 * @author Lucas Souza
*/
export default async function upload(filepath: string): Promise<string>{
  const api = new Client({ client_id: '3fe85ea6714be32' });
  
  const file_base64 = FileStream.readFileSync(filepath)
    .toString('base64');
  
  const { data: { link } } = await api.Image.upload(
    file_base64,
    { 
      type: 'base64',
      title: filepath
    }
  );
    
  return link;
}