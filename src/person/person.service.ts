import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entity/person.entity';
import { Repository } from 'typeorm';
import { PersonDto } from './dto/person.dto';
import { Customer } from 'src/customer/entity/customer.entity';
import { TokenNotification } from 'src/token-notification/entity/tokenNotification.entity';
import { TokenNotificationDto } from 'src/token-notification/dto/tokenNotification.dto';
import { Supplier } from 'src/supplier/entity/supplier.entity';

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository<Supplier>,
        @InjectRepository(TokenNotification)
        private readonly tokenRepository: Repository<TokenNotification>,
      ) {}
    
      async getAll() {
        return await this.personRepository.find({relations:["supplier", "customer","tokens"]});
      }

      async getSupplier(id: number) {
        return await this.personRepository.createQueryBuilder("person")
        .innerJoinAndSelect("person.supplier", "supplier")
        .leftJoinAndSelect("person.tokens", "tokenNotification")
        .addSelect("person.createdAt")
        .where("supplier.id="+id)
        .getOne();
      }

      async getCustomer(id: number) {
        return await this.personRepository.createQueryBuilder("person")
        .innerJoinAndSelect("person.customer", "customer")
        .leftJoinAndSelect("person.tokens", "tokenNotification")
        .addSelect("person.createdAt")
        .where("customer.id="+id)
        .getOne();
      }
    
      async createCustomer(personDto: PersonDto) {
        //search person exist dni in supplier
        try {
        let personExist = await this.personRepository.createQueryBuilder("person")
        .innerJoinAndSelect("person.customer", "customer")
        .where("person.numberDoc=:dni")
        .setParameters({dni: personDto.numberDoc})
        .getOne();

            if(personExist){

              let token = await this.TokenUnique(personExist, personDto.tokens[0]);
              return personExist
              
            }else{
               const createPerson = new Person();
               createPerson.firstName = personDto.firstName;
               createPerson.lastNameP = personDto.lastNameP;
               createPerson.lastNameM = personDto.lastNameM;
               createPerson.numberDoc = personDto.numberDoc;
               createPerson.address = personDto.address;
               createPerson.email = personDto.email;
               createPerson.telephone = personDto.telephone;
    
              let person = await this.personRepository.save(personDto);
              let customer = new Customer();
              customer.person = person;
              customer = await this.customerRepository.save(customer);
              person.customer = customer;
              let token = await this.TokenUnique(person, personDto.tokens[0]);
              return person;
            }
        
        } catch (error) {
          console.log("error de create customer ", error);
        }
      }

      async createSupplier(personDto: PersonDto) {
        try {

        let personExist = await this.personRepository.createQueryBuilder("person")
        .innerJoinAndSelect("person.supplier", "supplier")
        .where("person.numberDoc=:ruc")
        .setParameters({ruc: personDto.numberDoc})
        .getOne();

            if(personExist){

              let token = await this.TokenUnique(personExist, personDto.tokens[0]);
              return personExist
              
            }else{
               const createPerson = new Person();
               createPerson.firstName = personDto.firstName;
               createPerson.lastNameP = personDto.lastNameP;
               createPerson.lastNameM = personDto.lastNameM;
               createPerson.numberDoc = personDto.numberDoc;
               createPerson.address = personDto.address;
               createPerson.email = personDto.email;
               createPerson.telephone = personDto.telephone;

              let person = await this.personRepository.save(createPerson);
              let supplier = new Supplier();
              supplier.person = person;

              supplier = await this.supplierRepository.save(supplier);
              person.supplier = supplier;

              let token = await this.TokenUnique(person, personDto.tokens[0]);
              return person;
            }
        
        } catch (error) {
          console.log("error de create supplier ", error);
        }
        
        return await this.personRepository.save(personDto);
      }
    
      async updateCustomer(id: number, entidad: PersonDto) {
        const updateEntidad = await this.personRepository.createQueryBuilder("person")
                                                        .innerJoinAndSelect("person.customer", "customer")
                                                        .leftJoinAndSelect("person.tokens", "tokenNotification")
                                                        .where("person.id="+id)
                                                        .getOne();
                                           
        return updateEntidad;
      }

      async updateSupplier(id: number, entidad: PersonDto) {
       const updateEntidad = await this.personRepository.createQueryBuilder("person")
                                                       .innerJoinAndSelect("person.supplier", "supplier")
                                                       .leftJoinAndSelect("person.tokens", "tokenNotification")
                                                       .where("person.id="+id)
                                                       .getOne();
                                          
       return updateEntidad;
     }

      async delete(id: number): Promise<any> {
         await this.personRepository.delete(id);
      }

      async TokenUnique(person :Person , token : TokenNotificationDto){
        let tokenExist = await  this.tokenRepository.findOne({token:token.token});

              if(tokenExist){
                return tokenExist;
              }else{
                let token1 = new TokenNotification();
                token1.token = token.token ;
                token1.person = person;
                token1 = await this.tokenRepository.save(token1);
                return token1;
            }
      }

}
