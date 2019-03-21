import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { SpComponent } from './sp.component';
import { SpService } from './sp.service';
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
export interface IConfig {
  url: string,
  publishableKey: string
}

// then define injectionToken
export const ConfigService = new InjectionToken<IConfig>(
  'Config'
);

const declarations = [
  SpComponent,
  ListProductsComponent,
  // StripeCard,
  IdealBankComponent,
  IbanElementComponent
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
  static forRoot(config: IConfig): ModuleWithProviders {
    return {
      ngModule: SpModule,
      providers: [
        StripeScriptTag,
        {
          provide: ConfigService,
          useValue: config
        }
      ]
    };
  }

}
