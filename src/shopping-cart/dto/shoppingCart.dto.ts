import { PersonDto } from "src/person/dto/person.dto";

export class ShoppingCartDto{
  readonly productName: string;
  readonly price: number;
  readonly shippingPrice: number;
  readonly quantity: number;
  readonly confirmOrder: boolean;
  readonly confirmShipping: boolean;
}
