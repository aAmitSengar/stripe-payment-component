import { StripeCard } from './stripe-card';

export interface StripeToken{
  "id": string
  "object": string
  "card": StripeCard
  "client_ip": string
  "created": number
  "livemode": boolean
  "type": "card"|string
  "used": boolean
}
