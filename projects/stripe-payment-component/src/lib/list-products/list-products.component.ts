import { Input, Output, OnInit, EventEmitter, ElementRef, Component } from "@angular/core"
import { StripeInstance } from "../interfaces/sub/stripe-instance"
import { StripeCardOptions } from "../interfaces/sub/stripe-card-options"
import { StripeScriptTag } from "../classes/stripe-script-tag"
import { StripeToken } from "../interfaces/sub/stripe-token"

export interface bank_account {
  country: string
  currency: string
  routing_number: string
  account_number: string
  account_holder_name: string
  account_holder_type: string
}
@Component({
  selector: 'lib-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() options: StripeCardOptions
  @Output("catch") catcher: EventEmitter<Error> = new EventEmitter()

  @Input() invalid: Error
  @Output() invalidChange: EventEmitter<Error> = new EventEmitter()

  @Input() token: StripeToken
  @Output() tokenChange: EventEmitter<StripeToken> = new EventEmitter()

  stripe: StripeInstance
  elements: any

  constructor(
    public ElementRef: ElementRef,
    public StripeScriptTag: StripeScriptTag
  ) { }

  ngOnInit() {
    this.StripeScriptTag.promiseInstance()
      .then(i => {
        this.stripe = i

        this.elements = this.stripe.elements().create('card', this.options)
        this.elements.mount(this.ElementRef.nativeElement)

        this.elements.addEventListener('change', result => {
          if (result.error) {
            this.invalidChange.emit(this.invalid = result.error)
          }
        })
      })
  }

  createToken(data?): Promise<StripeToken> {
    delete this.invalid
    this.invalidChange.emit(this.invalid)

    return this.stripe.createToken(this.elements, data)
      .then(result => {
        if (result.error) {
          if (result.error.type == "validation_error") {
            this.invalidChange.emit(this.invalid = result.error)
          } else {
            this.catcher.emit(result.error)
            throw result.error
          }
        } else {
          this.tokenChange.emit(this.token = result.token)
          return result.token
        }
      })
  }
}


