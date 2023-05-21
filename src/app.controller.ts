import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// instantiating an object
import { adsSdk } from 'facebook-nodejs-business-sdk';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const AdAccount = adsSdk.AdAccount;
    const account = new AdAccount('act_3680086722212994');
    console.log(account.id); // fields can be accessed as properties
    return this.appService.getHello();
  }
}
