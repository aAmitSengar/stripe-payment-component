import { Component, OnInit } from '@angular/core';
import { StripeIDEALSource } from 'dist/stripe-payment-component';
import { Router } from "@angular/router"


@Component({
  selector: 'app-ideal-bank',
  templateUrl: './ideal-bank.component.html',
  styleUrls: ['./ideal-bank.component.less']
})
export class IdealBankComponent implements OnInit {
  // bankData = {
  //   country: 'US',
  //   currency: 'usd',
  //   routing_number: '110000000',
  //   account_number: '000123456789',
  //   account_holder_name: 'Jenny Rosen',
  //   account_holder_type: 'individual',
  // }
  title = 'Pay by iDEAL BAnk';
  // stripeCardOptions: StripeCardOptions;
  idealModel: any;
  lastError: Error;
  idealStyle = {
    base: {
      padding: '10px 12px',
      color: '#32325d',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      },
    },
    invalid: {
      color: '#fa755a',
    }
  };
  supportedCountries = ['SEPA'];
  StyleOptions: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.lastError = new Error();
    this.StyleOptions = {
      style: this.idealStyle,
      supportedCountries: this.supportedCountries,
    }
    this.idealModel = {
      type: 'ideal',
      amount: 1099,

      currency: 'eur',
      owner: {
        name: '',
        email: '',
        phone: '',
        // verified_address: ''
      },
      usage: "single_use",
      // Specify the URL to which the customer should be redirected
      // after paying.
      redirect: {
        return_url: 'https://localhost:4200/',
      },
    }
  }

  onStripeInvalid(error: Error) {
    this.lastError = error;
    console.log('Validation Error', error)
  }

  setStripeSource(source: StripeIDEALSource) {
    console.log('Stripe source', source)
    if (source && source.id) {
      if (source.redirect) {
        window.location.href = source.redirect.url;

      }
    }
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
