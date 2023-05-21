// instantiating an object
import { adsSdk } from 'facebook-nodejs-business-sdk';
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount('act_3680086722212994');
console.log(account.id); // fields can be accessed as properties
