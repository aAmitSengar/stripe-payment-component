import { Component } from '@angular/core';
import { StripeScriptTag } from "dist/sp";
import { StripeToken } from 'dist/sp';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private publishableKey: string = "pk_test_sc8WFVdBAx3EmrXyIsSQZrIj";
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

