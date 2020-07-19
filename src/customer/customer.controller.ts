import { Controller, Post, Res, Body, HttpStatus, Param, ParseIntPipe, Get } from '@nestjs/common';
import { ShoppingDto } from 'src/shopping/dto/shopping.dto';
import { ShoppingService } from 'src/shopping/shopping.service';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private shoppingService: ShoppingService, private customerService : CustomerService) { }
       @Post('shoppingcart')
     create(@Res() response,@Body() shoppingDto:ShoppingDto) {
         return this.shoppingService.create(shoppingDto).then(product => {
             response.status(HttpStatus.OK).json({true :true});
         }).catch((error) => {
             response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la creacion de la compra ', error  })
         });
     }

     @Get(':id/shoppingcarts')
     getShoppingCartByCustomer(@Res() response, @Param('id', ParseIntPipe) id: number) {
         return this.shoppingService.getShoppingCartByCustomer(id).then(shoppings => {
             response.status(HttpStatus.CREATED).json(shoppings);
         }).catch(() => {
             response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener las compras' })
         });
     }

     @Get('shoppingcart/:id')
     get(@Res() response, @Param('id', ParseIntPipe) id: number) {
         return this.shoppingService.get(id).then(shoppings => {
             response.status(HttpStatus.CREATED).json(shoppings);
         }).catch(() => {
             response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener las compras' })
         });
     }

     @Get('vaultBlock/:id')
     getVaultBlock(@Res() response, @Param('id', ParseIntPipe) id: number) {
         return this.customerService.getVaultBlock(id).then(vault => {
             response.status(HttpStatus.OK).json(vault);
         }).catch(() => {
             response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener el Vault Block' })
         });
     }
}
