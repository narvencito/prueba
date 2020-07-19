import { Controller, Post, Body, Res, HttpStatus, Get, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { response } from 'express';
import { PageFilterDto } from 'src/filter/dto/pageFilter.dto';


@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Post()
    create(@Body() createProductDto: ProductDto, @Res() response, @Param() {}) {
        return this.productService.create(createProductDto).then(product => {
            response.status(HttpStatus.CREATED).json(product);
        }).catch((error) => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la creacion de la producto ', error  })
        });
    }

    @Post('products')
    getAll(@Res() response, @Body() filters :PageFilterDto) {
        return this.productService.getAll(filters).then(resp => {
            response.status(HttpStatus.CREATED).json(resp);
        }).catch((error) => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener la lista de productos' })
        });
    }

    @Get(':id')
    get(@Res() response, @Param('id', ParseIntPipe) id: number) {
        return this.productService.get(id).then(product => {
            response.status(HttpStatus.CREATED).json(product);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener el producto' })
        });
    }

    @Put(':id')
    async update(@Body() updateProductDto: ProductDto,@Res() response, @Param('id', ParseIntPipe) id: number) {
      const update = await this.productService.update(id, updateProductDto).then(updateProduct => {
          response.status(HttpStatus.OK).json(updateProduct)
      }).catch((error)=> {
        response.status(HttpStatus.FORBIDDEN).json({mensaje : 'error al actualiza el producto'});
      });

    }
  
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
      await this.productService.delete(id);
      return true;
    }
}
