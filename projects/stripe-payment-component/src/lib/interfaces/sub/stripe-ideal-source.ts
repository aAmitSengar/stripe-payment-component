export interface StripeIDEALSource{
    "id": string,
    "object": string,
    "amount": number,
    "client_secret": string,
    "created": number,
    "currency": string,
    "flow": string,
    "livemode": false,
    "metadata": any,
    "redirect": {
      "failure_reason": string,
      "return_url": string,
      "status": string,
      "url": string
    },
    "owner": {
      "address": string,
      "email": string,
      "name": string,
      "phone": string,
      "verified_address": string,
      "verified_email": string,
      "verified_name": string,
      "verified_phone": string
    },
    "receiver": {
      "address": string,
      "amount_charged":number,
      "amount_received": number,
      "amount_returned": number,
      "refund_attributes_method": string,
      "refund_attributes_status": string
    },
    "ach_credit_transfer": {
      "account_number": string,
      "routing_number": string,
      "fingerprint": string,
      "bank_name": string,
      "swift_code": string
    },
    "statement_descriptor": string,
    "status": string,
    "type": string,
    "usage": string
}
