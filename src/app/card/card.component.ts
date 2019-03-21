import { Component, OnInit } from '@angular/core';
// import { StripeScriptTag } from "dist/sp";
import { StripeToken } from 'dist/sp';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  title = 'Pay by Card';
  // stripeCardOptions: StripeCardOptions;
  cardModel: any;
  lastError: Error;
  StyleOptions = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#fff",
        color: "#000",
        fontWeight: 400,
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",

        "::placeholder": {
          color: "#BFAEF6"
        },
        ":-webkit-autofill": {
          color: "#fce883"
        }
      },
      invalid: {
        iconColor: "#FFC7EE",
        color: "#FFC7EE"
      }
    }
  }
  amount=1000;
  constructor() { }

  ngOnInit() {
    this.lastError = new Error();
    this.cardModel = {
      address_city: "",
      address_country: '',
      address_line1: "",
      // address_line2: "",
      address_state: "",
      address_zip: "",
      country: "",
      // funding: "",
      name: "",
      email: "",
      phone: ""
    }
  }

  onStripeInvalid(error: Error) {
    this.lastError = error;
    console.log('Validation Error', error)
  }

  setStripeToken(token: StripeToken) {
    console.log('Stripe token', token)
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
