import { Product } from "src/product/entity/product.entity";

export class ShoppingDto {
  readonly qualification: string;
  readonly total: number;
  readonly subtotal: number;
  readonly envio: string;
  readonly latitude: string;
  readonly longitude: string;
  readonly customer_id : number;
  readonly code : string;
  readonly sendAddress : string;
  readonly amount : string;
  readonly authorizedAmount : string;
  readonly authorizationCode : string;
  readonly purchaseNumber : string;
  readonly traceNumber : string;
  readonly transactionDate : string;
  readonly transactionId : string;
  readonly statusVisa : string;
  readonly vaultBlock : string;
  readonly typePay : string;
  readonly products :[Product]
}
