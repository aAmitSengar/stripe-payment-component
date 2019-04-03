export interface StripeCard{
  "id": string
  "object": "card"|string
  "name": string
  "address_city": string
  "address_country": string
  "address_line1": string
  "address_line1_check": string
  "address_line2": string
  "address_state": string
  "address_zip": string
  "address_zip_check": string
  "brand": string
  "country": string
  "cvc_check": string
  "dynamic_last4": string
  "exp_month": number
  "exp_year": number
  "funding": string
  "last4": string
  "metadata": any
  "tokenization_method": any
}
