# Stripe Payment Component

## Install
`npm i stripe-payment-component`


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
**How to import**
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
    SpModule.forRoot({ publishableKey: 'pk_test_xxx', url: null })
  ],
  providers: [StripeScriptTag],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
*app.component.ts*
```bash
import { Component } from '@angular/core';
import { StripeScriptTag,StripeToken } from "stripe-payment-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private publishableKey: string = "pk_test_xxxx";
  title = 'pay';
  constructor(public StripeScriptTag: StripeScriptTag) {
    this.StripeScriptTag.setPublishableKey(this.publishableKey)
  }


  onStripeInvalid(error: Error) {
    console.log('Validation Error', error)
  }

  setStripeToken(token: StripeToken) {
    console.log('Stripe token', token)
  }

  onStripeError(error: Error) {
    console.error('Stripe error', error)
  }
}



```

**How to generate a Token using card**
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
