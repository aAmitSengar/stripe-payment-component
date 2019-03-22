import { Injectable, Inject } from "@angular/core"

import { Stripe } from "../interfaces/stripe-types"
import { StripeInstance } from '../interfaces/sub/stripe-instance';
// import { IConfig } from '../interfaces/configuration';
import { APP_CONFIG, AppConfig } from '../settings/sp.config.module';
// import { ConfigService } from '../classes/config.service';


@Injectable({ providedIn: 'root' }) export class StripeScriptTag {
  src: string = "https://js.stripe.com/v3/"
  Stripe: Stripe
  StripeInstance: StripeInstance
  load: Promise<any>
  // keys: InjectionToken<IConfig>;
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    console.log("====================================");
    console.log(config);

    // this.keys = ConfigService;
    this.load = this.injectIntoHead().then(st=>{
      this.setPublishableKey(config.publishableKey, config.stripeOptions).then(st => {
        console.log(st);
      })
    })

  }

  promiseStripe(): Promise<Stripe> {
    return this.load
  }

  async promiseInstance(): Promise<StripeInstance> {
    const string = await this.promiseStripe();
    if (!this.StripeInstance) {
      const err = new Error("Stripe PublishableKey NOT SET. Use method StripeScriptTag.setPublishableKey()");
      err["code"] = "STRIPEKEYNOTSET";
      throw err;
      //return Promise.reject( err )
    }
    console.log("stripe init");
    return this.StripeInstance;
  }

  setPublishableKey(
    key?: string,
    options?: any
  ): Promise<StripeInstance> {
    return this.load = this.load
      .then(() => this.StripeInstance = this.Stripe(key, options))
  }

  injectIntoHead(): Promise<Stripe> {
    if (window["Stripe"]) {
      return Promise.resolve(window["Stripe"])
    }

    return new Promise((res, rej) => {
      const head = this.getTargetTagDropElement()
      const script = document.createElement("script")
      script.setAttribute("src", this.src)
      script.setAttribute("type", "text/javascript")

      script.addEventListener("load", () => {
        this.Stripe = window["Stripe"]
        res(window["Stripe"])
      })

      head.appendChild(script)
    })
  }

  getTargetTagDropElement() {
    let elm = document.getElementsByTagName("head")

    if (elm.length) return elm[0]

    return document.getElementsByTagName("body")[0]
  }
}
