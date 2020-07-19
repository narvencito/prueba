import { Photo } from "src/photo/entity/photo.entity";
import { Supplier } from "src/supplier/entity/supplier.entity";
import { Category } from "src/category/entity/category.entity";

export class ProductDto{
    readonly name : string;
    readonly price : number;
    readonly stock : number;
    readonly description : string;
    readonly brand : string;

    readonly photos: [Photo];
    readonly supplier : Supplier;
    readonly category : Category;

}
