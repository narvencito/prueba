import { Injectable } from '@nestjs/common';
import { ShoppingDto } from './dto/shopping.dto';
import { Repository } from 'typeorm';
import { Shopping } from './entity/shopping.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingCart } from 'src/shopping-cart/entity/shoppingCart.entity';
import { ShoppingStatus } from 'src/shopping-status/entity/shoppingStatus.entity';
import { TokenNotificationService } from 'src/token-notification/token-notification.service';
import { TypeStatusShopping } from 'src/utils/typeStatusShopping';
import { Customer } from 'src/customer/entity/customer.entity';
import { Product } from 'src/product/entity/product.entity';

@Injectable()
export class ShoppingService {
    constructor(
        @InjectRepository(Shopping)
        private readonly shoppingRepository: Repository<Shopping>,

        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,

        @InjectRepository(ShoppingCart)
        private readonly shoppingCartRepository: Repository<ShoppingCart>,

        @InjectRepository(ShoppingStatus)
        private readonly shoppingStatusRepository: Repository<ShoppingStatus>,

        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,

        private notificationService: TokenNotificationService
      ) {}
      
    async create(shoppingDto:ShoppingDto) {
       try {
        let code = Date.now().toString();
        const customer = await this.customerRepository.findOne(shoppingDto.customer_id) ;
        customer.vaultBlock = (shoppingDto.vaultBlock != "")? ((customer.vaultBlock == shoppingDto.vaultBlock)? customer.vaultBlock : shoppingDto.vaultBlock):customer.vaultBlock;
        //console.log("vault block ", customer);
        await this.customerRepository.save(customer);

        let createShopping = new Shopping();
        createShopping.envio = shoppingDto.envio;
        createShopping.latitud = shoppingDto.latitude;
        createShopping.longitud = shoppingDto.longitude;
        createShopping.subTotal = shoppingDto.subtotal.toString()
        createShopping.total = shoppingDto.total.toString();
        createShopping.sendAddress = shoppingDto.sendAddress;
        createShopping.amount = shoppingDto.amount;
        createShopping.authorizedAmount = shoppingDto.authorizedAmount;
        createShopping.authorizationCode = shoppingDto.authorizationCode;
        createShopping.purchaseNumber = shoppingDto.purchaseNumber;
        createShopping.traceNumber = shoppingDto.traceNumber;
        createShopping.transactionId = shoppingDto.transactionId;
        createShopping.transactionDate = new Date(parseInt(shoppingDto.transactionDate));
        createShopping.statusVisa = shoppingDto.statusVisa;
        createShopping.typePay = shoppingDto.typePay;
        createShopping.customer = customer;
        createShopping.code = code;

        createShopping = await this.shoppingRepository.save(createShopping);
        let listShoppingCartIds : Array<Number> = [];
        const shoppingId = createShopping.id;

        for(const product of shoppingDto.products){
            let createShoppingCart = new ShoppingCart();
            createShoppingCart.product = product;
            createShoppingCart.productName = product.name;
            createShoppingCart.price = product.price;
            createShoppingCart.quantity = product.stock;
            createShoppingCart.shopping = createShopping;
  
            createShoppingCart = await this.shoppingCartRepository.save(createShoppingCart);
            listShoppingCartIds.push(product.supplier.id);
        }

        let createStatus = new ShoppingStatus();
        createStatus.status = TypeStatusShopping.CREADO;
        createStatus.shopping = createShopping;
        createStatus.create = true;
        await this.shoppingStatusRepository.save(createStatus);

        //createShopping.customer_id = shoppingDto.customer_id;
        setTimeout(() => {
            this.notificationService.notificationSupplier(code , shoppingId, listShoppingCartIds );
        }, 1000);

        return true;
       } catch (error) {
           console.log("error al crear la la compra ", error);
       }
    }

    async get(id : number) {
        
    }

    async getShoppingCartByCustomer(id : number) {
        try {
            const shoppings = await this.shoppingRepository.createQueryBuilder("shopping")
                                                            .innerJoinAndSelect("shopping.status", "status")
                                                            .addSelect("status.createdAt")
                                                            .innerJoinAndSelect("shopping.carts", "carts")
                                                            .innerJoinAndSelect("carts.product", "product")
                                                            .leftJoinAndSelect("product.photos", "photo")
                                                            .innerJoinAndSelect("shopping.customer", "customer")
                                                            .innerJoinAndSelect("customer.person", "person")
                                                            .where("shopping.customer.id="+id)
                                                            .getMany();

            return {data : shoppings} ;

        } catch (error) {
            console.log("error al obtener los shoppingCart por cliente ", error);
        }
    }

    async getShoppingCartBySupplier(id : number) {
        try {
            const shoppings = await this.shoppingRepository.createQueryBuilder("shopping")
                                                            .innerJoinAndSelect("shopping.status", "status")
                                                            .addSelect("status.createdAt")
                                                            .innerJoinAndSelect("shopping.customer", "customer")
                                                            .innerJoinAndSelect("customer.person", "person")
                                                            .innerJoinAndSelect("shopping.carts", "carts")
                                                            .innerJoinAndSelect("carts.product", "product")
                                                            .leftJoinAndSelect("product.photos", "photo")
                                                            .innerJoin("product.supplier", "supplier")
                                                            .where("supplier.id="+id)
                                                            .getMany();
            
            return {data : shoppings} ;

        } catch (error) {
            console.log("error al obtener los shoppingCart por cliente ", error);
        }
    }

    async confirmShoppingSupplier(id : number, supplier : any) {
        try {
        //     let myIdsProducts = [];
        //     const myProducts = await this.productRepository.createQueryBuilder("product")
        //                                                     .innerJoin("product.supplier", "supplier")
        //                                                     .select("product.id")
        //                                                     .where("supplier.id="+supplier.id)
        //                                                     .getMany();
        //    for(const pro of myProducts ){
        //     myIdsProducts.push(pro.id);
        //    }

        //    const affectedRows = await this.shoppingCartRepository.createQueryBuilder("carts")
        //                                                          .innerJoin("carts.products", "product")
        //                                                          .where("product.id IN (:...ids)", {ids: myIdsProducts})
        //                                                          .update("carts")
        //                                                          .set({confirmShipping : true})
        //                                                          .execute();

        const shopping = await this.shoppingRepository.createQueryBuilder("shopping")
                                                            .innerJoinAndSelect("shopping.carts", "carts")
                                                            .innerJoinAndSelect("carts.product", "product")
                                                            .innerJoinAndSelect("shopping.customer", "customer")
                                                            .where("shopping.id="+id)
                                                            .getOne();
    
            for(const car of shopping.carts){
                let productUpdate = await this.productRepository.findOne(car.product.id);
                const newStock = productUpdate.stock- car.quantity;
                productUpdate.stock = newStock;

                productUpdate = await this.productRepository.save(productUpdate);
            }
            
            let createStatus = new ShoppingStatus();
            createStatus.status = TypeStatusShopping.CONFIRMADO;
            createStatus.shopping = shopping;
            createStatus.confirm = true;
            await this.shoppingStatusRepository.save(createStatus);

            setTimeout(() => {
                this.notificationService.notificationCustomer(shopping.code , shopping.id, shopping.customer.id );
            }, 1000);

        return true;
            
        } catch (error) {
            console.log("error al confirmar el pedido ", error);
        }
    }
}
