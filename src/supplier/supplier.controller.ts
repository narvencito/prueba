import { Controller, Res, HttpStatus, ParseIntPipe, Param, Body, Post, Get } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { ProductService } from 'src/product/product.service';
import { PageFilterDto } from 'src/filter/dto/pageFilter.dto';
import { ShoppingService } from 'src/shopping/shopping.service';

@Controller('supplier')
export class SupplierController {

    constructor(private supplierService: SupplierService, private productService : ProductService, private shoppingService: ShoppingService) { }

    @Post(':id/products')
    getProductos(@Res() response,@Body() filters :PageFilterDto , @Param('id', ParseIntPipe) id: number) {
        return this.productService.getProductsByIdSupplier(id, filters).then(resp => {
            response.status(HttpStatus.CREATED).json(resp);
        }).catch((error) => {
            console.error("errors ", error);
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener la lista de productos por vendedor', error })
        });
    }

    @Get('shoppingcart/:id')
    create(@Res() response) {
        // return this.shoppingService.create().then(product => {
        //     response.status(HttpStatus.OK).json({true :true});
        // }).catch((error) => {
        //     response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la creacion de la compra ', error  })
        // });
    }

    @Get(':id/shoppingcarts')
    getShoppingCartBySupplier(@Res() response, @Param('id', ParseIntPipe) id: number) {
        return this.shoppingService.getShoppingCartBySupplier(id).then(shoppings => {
            response.status(HttpStatus.CREATED).json(shoppings);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener las ordenes' })
        });
    }

    @Post('shoppingcart/:id/confirm')
    confirmShoppingSupplier(@Res() response, @Param('id', ParseIntPipe) id: number, @Body() supplier_id : number ) {
        return this.shoppingService.confirmShoppingSupplier(id, supplier_id).then(resp => {
            response.status(HttpStatus.CREATED).json(resp);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al confirmar la orden' })
        });
    }
}
