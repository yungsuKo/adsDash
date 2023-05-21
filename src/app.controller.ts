import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// instantiating an object
import { adsSdk } from 'facebook-nodejs-business-sdk';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    // const AdAccount = adsSdk.AdAccount;
    // const account = new AdAccount('act_3680086722212994');
    // console.log(account.id); // fields can be accessed as properties
    const data = {
      access_token: process.env,
    };
    console.log(process.env.ACCESS_TOKEN);
    // , data
    axios
      .get(
        `https://graph.facebook.com/v16.0/act_${process.env.AD_ACCOUNT_ID}/campaigns?access_token=${process.env.ACCESS_TOKEN}&time_range={'since': '2022-01-01', 'until': '2022-12-31'}&level=account&fields=account_id,account_name,spend`,
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    return this.appService.getHello();
  }

  @Get('/accesstoken')
  async getAccessToken(): Promise<string> {
    let result;
    axios.get('').then((response) => {
      console.log(response.data);
      result = response.data.access_token;
    });
    console.log(result);
    return result;
  }
}
