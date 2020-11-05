import { Client } from '@rmp135/imgur';
import FileStream from 'fs';
/**
* Connect to Imgur API
* @param client_id the client id on imgur token
* @author Lucas Souza
*/
export default class Imgur{
  private client_id:string;

  constructor(client_id: string){
    this.client_id = client_id;
  }

  /**
   * Uploads a Image to Imgur asynchronous and returns the image url
   * @param filepath filepath of the image file you want to upload
   */
  async upload(filepath: string): Promise<string>{
    const api = new Client({ client_id: this.client_id });
    
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
}