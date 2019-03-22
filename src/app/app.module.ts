import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpModule, StripeScriptTag } from 'dist/stripe-payment-component';
import { IdealBankComponent } from './ideal-bank/ideal-bank.component';
import { CardComponent } from './card/card.component';
import { IbanSourceComponent } from './iban-source/iban-source.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    IdealBankComponent,
    CardComponent,
    IbanSourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SpModule.forRoot({
      publishableKey: environment.stripeKey,
      url: '',
      accountToken: null,
      apiEndpoint: '',
      stripeOptions:{}
    })
  ],
  providers: [StripeScriptTag],
  bootstrap: [AppComponent]
})
export class AppModule { }
