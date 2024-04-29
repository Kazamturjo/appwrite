import { Client,Account, Databases } from 'appwrite';


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6628e1a4df2c049cdf7f');


    export const account=new Account (client)
    export const database= new Databases(client,"662f4cad003c735a93b6")
    export { ID } from 'appwrite';
