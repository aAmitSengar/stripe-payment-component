import { NgModule, InjectionToken, Injectable } from '@angular/core';
// import { InjectionToken } from '@angular/core';
import { IConfig } from '../interfaces/configuration';
export let APP_CONFIG = new InjectionToken<IConfig>('app.config');

export class AppConfig implements IConfig {
  apiEndpoint: string;
  accountToken:string;
  publishableKey:string;
  stripeOptions:{};
  url:string;
}

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: null,
  accountToken:null,
  publishableKey:null,
  url:null,
  stripeOptions:{}
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
@Injectable()
export class SpConfigModule { }
