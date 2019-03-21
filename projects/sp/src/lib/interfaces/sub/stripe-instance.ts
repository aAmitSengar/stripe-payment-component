export interface StripeInstance{
  elements:(options?:any)=>any
  createToken:(elements:any, options?:any)=>any
  createSource:(sourceData?:any)=>any
  retrieveSource:()=>any
  paymentRequest:()=>any
}
