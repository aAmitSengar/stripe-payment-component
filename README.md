# Stripe Payment Component with Angular JS
[![Build Status](https://travis-ci.org/aAmitSengar/stripe-payment.svg?branch=master)](https://travis-ci.org/aAmitSengar/stripe-payment) ![npm](https://img.shields.io/npm/dw/stripe-payment-component.svg)

`git clone https://github.com/aAmitSengar/stripe-payment.git`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Stripe Payment Component

This library provides a simple way to integrate Stripe payments.
if you want to collaborate  then please rise PR request or file issue.




## Install
`npm i stripe-payment-component`
`yarn add stripe-payment-component`


# Introduction
This library is usefull while integrating Stripe payment components.
## Prerequisites

Both the CLI and generated project have dependencies that require Node 8.9 or higher, together
with NPM 5.5.1 or higher.


## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

### Install 
```bash
npm install stripe-payment-component
```

### Example Usage
*app.module.ts*

```bash 
import { SpModule, StripeScriptTag } from 'stripe-payment-component';

@NgModule({
  declarations: [
    ....
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
```
### Create card component using angular CLI
```bash
ng generate component card
```



*card.component.ts*
```bash
import { Component, OnInit } from '@angular/core';
import { StripeToken } from 'stripe-payment-component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  title = 'Pay by Card';
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
      address_state: "",
      address_zip: "",
      country: "",
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


```
*card.component.html*
```bash
<div class="cell cardPay">
  <form (ngSubmit)="stripeCard.createToken(cardModel)">
    <div id="cardPay-paymentRequest">
      <!--Stripe paymentRequestButton Element inserted here-->
    </div>
    <fieldset>
      <legend class="card-only">Pay with card</legend>
      <legend class="payment-request-available">Or enter card details</legend>
      <div class="row">
        <div class="field">
          <label for="name">Name</label>
          <input id="name" name="name" [(ngModel)]="cardModel.name" required minlength="4" class="input" type="text"
            placeholder="Jane Doe" required autocomplete="name">
          <div *ngIf="cardModel.name.invalid && (cardModel.name.dirty || cardModel.name.touched)" class="alert alert-danger">
            <div *ngIf="cardModel.name.errors.required">
              Name is required.
            </div>
            <div *ngIf="cardModel.name.errors.minlength">
              Name must be at least 4 characters long.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" [(ngModel)]="cardModel.email" class="input" type="text" placeholder="janedoe@gmail.com"
            required="" autocomplete="email">
        </div>
        <div class="field">
          <label for="phone">Phone</label>
          <input id="phone" class="input" name="phone" [(ngModel)]="cardModel.phone" type="text" placeholder="(941) 555-0123"
            required="" autocomplete="tel">
        </div>
      </div>
      <div data-locale-reversible>
        <div class="row">
          <div class="field">
            <label for="address">Address</label>
            <input id="address" class="input" name="address" [(ngModel)]="cardModel.address_line1" type="text"
              placeholder="185 Berry St" required="" autocomplete="address-line1">
          </div>
        </div>
        <div class="row" data-locale-reversible>
          <div class="field">
            <label for="city">City</label>
            <input id="city" class="input" name="address_city" [(ngModel)]="cardModel.address_city" type="text"
              placeholder="San Francisco" required="" autocomplete="address-level2">
          </div>
          <div class="field">
            <label for="state">State</label>
            <input id="state" class="input empty" name="state" [(ngModel)]="cardModel.address_state" type="text"
              placeholder="CA" required="" autocomplete="address-level1">
          </div>
          <div class="field">
            <label for="zip">ZIP</label>
            <input id="zip" class="input empty" name="zip" [(ngModel)]="cardModel.address_zip" type="text" placeholder="94107"
              required="" autocomplete="postal-code">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="field">
          <label for="card">Card</label>
          <div id="example5-card" class="input">
            <lib-list-products #stripeCard (catcher)="onStripeError($event)" (invalidChange)="invalidError($event)"
              (tokenChange)="setStripeToken($event)" [(options)]="StyleOptions">
            </lib-list-products>
            <!-- [(invalid)]="invalidError" -->
          </div>
        </div>
      </div>
      <button type="submit">Pay {{amount/100 | currency}}</button>
    </fieldset>
    <div *ngIf="lastError && lastError.message" class="error" role="alert">
      <span class="message">{{ lastError.message }}</span>
    </div>
  </form>
  <!-- <div class="success">
      <div class="icon">
        <svg width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <circle class="border" cx="42" cy="42" r="40" stroke-linecap="round" stroke-width="4" stroke="#000" fill="none"></circle>
          <path class="checkmark" stroke-linecap="round" stroke-linejoin="round" d="M23.375 42.5488281 36.8840688 56.0578969 64.891932 28.0500338" stroke-width="4" stroke="#000" fill="none"></path>
        </svg>
      </div>
      <h3 class="title" data-tid="elements_examples.success.title">Payment successful</h3>
      <p class="message"><span data-tid="elements_examples.success.message">Thanks for trying Stripe Elements. No money was charged, but we generated a token: </span><span class="token">tok_189gMN2eZvKYlo2CwTBv9KKh</span></p>
      <a class="reset" href="#">
        <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path fill="#000000" d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"></path>
        </svg>
      </a>
    </div> -->
</div>

```
*card.component.css*
```bash
.cardPay {
  /* background-color: #36323d; */
  width: auto;
  display: flex;
}

.cardPay * {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.cardPay form {

}

#cardPay-paymentRequest {
  max-width: 500px;
  width: 100%;
  margin-bottom: 10px;
}

.cardPay fieldset {
  border: 1px solid #b5a4ed;
  padding: 15px;
  border-radius: 6px;
}

.cardPay fieldset legend {
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #cdd0f8;
  background-color: #9169d8;
}

.cardPay fieldset legend + * {
  clear: both;
}

.cardPay .card-only {
  display: block;
}
.cardPay .payment-request-available {
  display: none;
}

.cardPay .row {
  display: -ms-flexbox;
  display: flex;
  margin: 0 0 10px;
}

.cardPay .field {
  position: relative;
  width: 100%;
}

.cardPay .field + .field {
  margin-left: 10px;
}

.cardPay label {
  width: 100%;
  color: #cdd0f8;
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cardPay .input {
  width: 100%;
  color: #fff;
  background: transparent;
  padding: 5px 0 6px 0;
  border-bottom: 1px solid #a988ec;
  transition: border-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.cardPay .input::-webkit-input-placeholder {
  color: #bfaef6;
}

.cardPay .input::-moz-placeholder {
  color: #bfaef6;
}

.cardPay .input:-ms-input-placeholder {
  color: #bfaef6;
}

.cardPay .input.StripeElement--focus,
.cardPay .input:focus {
  border-color: #fff;
}
.cardPay .input.StripeElement--invalid {
  border-color: #ffc7ee;
}

.cardPay input:-webkit-autofill,
.cardPay select:-webkit-autofill {
  -webkit-text-fill-color: #fce883;
  transition: background-color 100000000s;
  -webkit-animation: 1ms void-animation-out;
}

.cardPay .StripeElement--webkit-autofill {
  background: transparent !important;
}

.cardPay input,
.cardPay button,
.cardPay select {
  -webkit-animation: 1ms void-animation-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
  border-radius: 0;
}

.cardPay select.input,
.cardPay select:-webkit-autofill {
  background-image: url('data:image/svg+xml;utf8,<svg width="10px" height="5px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#fff" d="M5.35355339,4.64644661 L9.14644661,0.853553391 L9.14644661,0.853553391 C9.34170876,0.658291245 9.34170876,0.341708755 9.14644661,0.146446609 C9.05267842,0.0526784202 8.92550146,-2.43597394e-17 8.79289322,0 L1.20710678,0 L1.20710678,0 C0.930964406,5.07265313e-17 0.707106781,0.223857625 0.707106781,0.5 C0.707106781,0.632608245 0.759785201,0.759785201 0.853553391,0.853553391 L4.64644661,4.64644661 L4.64644661,4.64644661 C4.84170876,4.84170876 5.15829124,4.84170876 5.35355339,4.64644661 Z" id="shape"></path></svg>');
  background-position: 100%;
  background-size: 10px 5px;
  background-repeat: no-repeat;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 20px;
}

.cardPay button {
  display: block;
  width: 100%;
  height: 40px;
  margin: 20px 0 0;
  background-color: #fff;
  border-radius: 6px;
  color: #9169d8;
  font-weight: 500;
  cursor: pointer;
}

.cardPay button:active {
  background-color: #cdd0f8;
}

.cardPay .error svg .base {
  fill: #fff;
}

.cardPay .error svg .glyph {
  fill: #9169d8;
}

.cardPay .error .message {
  color: rgb(255, 0, 0);
}

.cardPay .success .icon .border {
  stroke: #bfaef6;
}

.cardPay .success .icon .checkmark {
  stroke: #fff;
}

.cardPay .success .title {
  color: #fff;
}

.cardPay .success .message {
  color: #cdd0f8;
}

.cardPay .success .reset path {
  fill: #fff;
}

```

# License

The MIT License (MIT)

Copyright (c) 2013-2017 Amit Sengar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.





