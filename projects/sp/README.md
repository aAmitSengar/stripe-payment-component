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
**Creating a credit card token**
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
