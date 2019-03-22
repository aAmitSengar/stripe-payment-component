import { StripeClasses } from './stripe-classes';
import { StripeStyling } from './stripe-styling';

export interface StripeCardOptions{
  classes:StripeClasses
  hidePostalCode:boolean
  hideIcon:boolean
  iconStyle:string
  placeholder:string
  style:StripeStyling
}
