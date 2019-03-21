import { Component, OnInit } from '@angular/core';
// import { StripeScriptTag } from "dist/sp";
import { StripeToken, StripeIDEALSource } from 'dist/sp';

@Component({
  selector: 'app-iban-source',
  templateUrl: './iban-source.component.html',
  styleUrls: ['./iban-source.component.less']
})
export class IbanSourceComponent implements OnInit {
  title = 'Pay by IBAN Bank';
  // stripeCardOptions: StripeCardOptions;
  ibanModel: any;
  lastError: Error;
  ibanStyle = {
    base: {
      color: '#32325d',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      },
      ':-webkit-autofill': {
        color: '#32325d',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
      ':-webkit-autofill': {
        color: '#fa755a',
      },
    }
  };
  supportedCountries = ['SEPA'];
  StyleOptions: any;
  constructor() { }

  ngOnInit() {
    this.lastError = new Error();
    this.StyleOptions = {
      style: this.ibanStyle,
      supportedCountries: this.supportedCountries,
    }
    this.ibanModel = {
      type: 'ach_credit_transfer',
      currency: 'usd',
      amount:110,
      owner: {
        name: '',
        email: '',
      },
      mandate: {
        // Automatically send a mandate notification email to your customer
        // once the source is charged.
        notification_method: 'email',
      },
      usage: "reusable",
    }
  }

  onStripeInvalid(error: Error) {
    this.lastError = error;
    console.log('Validation Error', error)
  }

  setStripeSource(source: StripeIDEALSource) {
    console.log('Stripe token', source)
  }

  onStripeError(error: Error) {
    this.lastError = error;
    console.error('Stripe error', error)
  }
  invalidError(error: Error) {
    if (error) {
      this.lastError = error;
      console.error('Stripe error', error)
    }
  }
}
