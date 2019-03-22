import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { SpComponent } from './sp.component';
// import { SpService } from './sp.service';
import { ListProductsComponent } from './list-products/list-products.component'
import { CommonModule } from "@angular/common";

import { StripeScriptTag } from "./classes/stripe-script-tag"
export { StripeScriptTag } from "./classes/stripe-script-tag"

// import { StripeCard } from "./components/StripeCard.component"
// export { StripeCard } from "./components/StripeCard.component"


import { IdealBankComponent } from "./ideal-bank/ideal-bank.component"
import { IbanElementComponent } from "./iban-element/iban-element.component"
export { bank_account } from "./ideal-bank/ideal-bank.component";

// export { StripeStyling } from '../lib/interfaces/sub/stripe-styling';
// export { StripeStyle } from '../lib/interfaces/sub/stripe-style';
// export { StripeCardOptions } from '../lib/interfaces/sub/stripe-card-options';


// first define an interface for our configuration
// import { IConfig } from '../lib/interfaces/configuration';
// export { IConfig } from '../lib/interfaces/configuration';

// then define injectionToken
// import { ConfigService } from './classes/config.service';
// export { ConfigService } from './classes/config.service';
import { APP_CONFIG, AppConfig } from './settings/sp.config.module'



const declarations = [
  SpComponent,
  ListProductsComponent,
  // StripeCard,
  IdealBankComponent,
  IbanElementComponent,
  // SpConfigModule
]
const exportss = [
  SpComponent,
  ListProductsComponent,
  IdealBankComponent,
  IbanElementComponent
]
const imports = [CommonModule]



@NgModule({
  declarations: declarations,
  imports: imports,
  exports: exportss
})
export class SpModule {
  static forRoot(config: AppConfig): ModuleWithProviders {
    return {
      ngModule: SpModule,
      providers: [
        StripeScriptTag,
        {
          provide: APP_CONFIG,
          useValue: config
        }
      ]
    };
  }

}
