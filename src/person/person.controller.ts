import { Controller, HttpStatus, Post, Body, Res, Get, Put, Delete, ParseIntPipe, Param } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonDto } from './dto/person.dto';
import { MailerService } from 'src/utils/mailer.service';

@Controller('person')
export class PersonController {
    constructor(private personService: PersonService, private emailService : MailerService) { }

    @Post('customer')
    CreateCustomer(@Body() createPersonDto: PersonDto, @Res() response) {
        return this.personService.createCustomer(createPersonDto).then(person => {
            this.emailService.sendmailCustomer(person.email);
            response.status(HttpStatus.CREATED).json(person);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la creacion del cliente' })
        });
    }

    @Post('supplier')
    CreateSupplier(@Body() createPersonDto: PersonDto, @Res() response) {
        return this.personService.createSupplier(createPersonDto).then(person => {
            this.emailService.sendmailSupplier(person.email);
            response.status(HttpStatus.CREATED).json(person);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error en la creacion del proveedor' })
        });
    }

    @Get('/persons')
    getAll(@Res() response) {
        return this.personService.getAll().then(list => {
            response.status(HttpStatus.CREATED).json(list);
        }).catch((error) => {
            console.log("error  get all person ", error);
            response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener la lista de Personas' })
        });
    }

    @Get('supplier/:id')
    async getSupplier(@Res() response, @Param('id', ParseIntPipe) id: number) {
        // console.log("id supplier ", id);
      return this.personService.getSupplier(id).then(resp => {
        response.status(HttpStatus.CREATED).json(resp);
    }).catch((error) => {
        console.log("error ", error);
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener el proveedor' })
    });
   }

   @Get('customer/:id')
    async getCustomer(@Res() response, @Param('id', ParseIntPipe) id: number) {
        // console.log("id customer ", id);
      return this.personService.getCustomer(id).then(resp => {
        response.status(HttpStatus.CREATED).json(resp);
    }).catch((error) => {
        console.log("error ", error);
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error al obtener el cliente' })
    });
   }

    @Put('customer/:id')
    async updateCustomer(@Body() updatePersonDto: PersonDto, /*@Res() response,*/ @Param('id', ParseIntPipe) id: number) {
      const update = await this.personService.updateCustomer(id, updatePersonDto);
      this.emailService.sendmailCustomer(update.email);
      return update;
    }

    @Put('supplier/:id')
    async updateSupplier(@Body() updatePersonDto: PersonDto, /*@Res() response,*/ @Param('id', ParseIntPipe) id: number) {
      const update = await this.personService.updateSupplier(id, updatePersonDto);
      this.emailService.sendmailCustomer(update.email);
      return update;
    }
  
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
      await this.personService.delete(id);
      return true;
    }
}
