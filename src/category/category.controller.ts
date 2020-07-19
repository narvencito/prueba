import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    Create(@Body() createcategoryDto: CategoryDto, @Res() response) {
        return this.categoryService.create(createcategoryDto).then(category => {
            response.status(HttpStatus.CREATED).json(category);
        }).catch((error) => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la creacion de la categoria ', error })
        });
    }

    @Get()
    getAll(@Res() response) {
        return this.categoryService.getAll().then(list => {
            response.status(HttpStatus.CREATED).json(list);
        }).catch((error) => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener la lista de categorias ', error })
        });
    }

    @Put(':id')
    update(@Res() response, @Body() updatecategoryDto: CategoryDto, @Param('id', ParseIntPipe) id: number) {
        return this.categoryService.update(id , updatecategoryDto).then(cat => {
            response.status(HttpStatus.CREATED).json(cat);
        }).catch((error) => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al actualizar la categoria ', error })
        });
    }

    @Delete(':id')
    delete() {
        return 'categoria eliminado';
    }
}
