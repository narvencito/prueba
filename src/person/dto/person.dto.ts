import { Customer } from "src/customer/entity/customer.entity";
import { Supplier } from "src/supplier/entity/supplier.entity";
import { TokenNotification } from "src/token-notification/entity/tokenNotification.entity";

export class PersonDto {
    readonly firstName: string;
    readonly lastNameP: string;
    readonly lastNameM: string;
    readonly numberDoc: string;
    readonly address: string;
    readonly telephone: string;
    readonly email: string;
    readonly qualification: string;
     tokens : [TokenNotification];
     customer: Customer;
     supplier: Supplier;
  }
  