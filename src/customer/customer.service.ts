import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { Repository } from 'typeorm';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
      ) {}
    
      async getAll() {
        return await this.customerRepository.find();
      }
    
      async create(CustomerDto: CustomerDto) {
        const createCustomer = new Customer();
        createCustomer.qualification = CustomerDto.qualification;
 
        //createCustomer.estado = entidad.estado;
        return await this.customerRepository.save(createCustomer);
      }
    
      async update(id: number, entidad: CustomerDto) {
        const updateEntidad = await this.customerRepository.findOne(id);
      }

      async getVaultBlock(id: number){
          const customer = await this.customerRepository.findOne(id);
          return customer.vaultBlock;
      }
      
}
