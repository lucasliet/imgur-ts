/**
* Connect to Imgur API
* @param client_id the client id on imgur token
* @author Lucas Souza
*/
export default class Imgur {
    private client_id;
    constructor(client_id: string);
    /**
     * Uploads a Image to Imgur asynchronous and returns the image url
     * @param filepath filepath of the image file you want to upload
     */
    upload(filepath: string): Promise<string>;
}
