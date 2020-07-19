import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { CategoryDto } from './dto/category.dto';


@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
      ) {}
    
      async getAll() {
        return await this.categoryRepository.find();
      }
    
      async create(category: CategoryDto) {
        const createCategory = new Category();
        createCategory.name = category.name;
 
        //createCategory.estado = entidad.estado;
        return await this.categoryRepository.save(createCategory);
      }
    
      async update(id: number, entidad: CategoryDto) {
        const updateEntidad = await this.categoryRepository.findOne(id);
        updateEntidad.name = entidad.name;
        return await this.categoryRepository.save(updateEntidad);
      }
}
