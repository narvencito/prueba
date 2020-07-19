import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entity/supplier.entity';
import { Repository } from 'typeorm';
import { SupplierDto } from './dto/supplier.dto';

@Injectable()
export class SupplierService {

    constructor(
        @InjectRepository(Supplier)
        private readonly SupplierRepository: Repository<Supplier>,
      ) {}
    
      async getAll() {
        return await this.SupplierRepository.find();
      }

      async getProducts(id: number) {
        return await this.SupplierRepository.findOne(1, {relations: ['products']});
      }
    
      async create(SupplierDto: SupplierDto) {
        const createSupplier = new Supplier();
        createSupplier.latitud = SupplierDto.latitud;
        createSupplier.longitud = SupplierDto.longitud;
        return await this.SupplierRepository.save(createSupplier);
      }
    
      async update(id: number, entidad: SupplierDto) {
        const updateEntidad = await this.SupplierRepository.findOne(id);
      }
      
}
