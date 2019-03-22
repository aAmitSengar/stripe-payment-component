import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpModule, StripeScriptTag } from 'dist/stripe-payment-component';
import { IdealBankComponent } from './ideal-bank/ideal-bank.component';
import { CardComponent } from './card/card.component';
import { IbanSourceComponent } from './iban-source/iban-source.component';

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
    SpModule.forRoot({ publishableKey: 'pk_test_sc8WFVdBAx3EmrXyIsSQZrIj', url: null })
  ],
  providers: [StripeScriptTag],
  bootstrap: [AppComponent]
})
export class AppModule { }
