import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenNotification } from './entity/tokenNotification.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import { NotificationDto } from './dto/tokenNotification.dto';
import { Supplier } from 'src/supplier/entity/supplier.entity';
import { Customer } from 'src/customer/entity/customer.entity';

@Injectable()
export class TokenNotificationService {
    constructor(
        @InjectRepository(TokenNotification)
        private readonly tokenNotificationRepository: Repository<TokenNotification>,
        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository<Supplier>,
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
      ) {}
    async create(notificationDto : NotificationDto) {
        console.log("notification ", notificationDto);
        axios.post(
            "https://fcm.googleapis.com/fcm/send",
            {
                to: notificationDto.token,
                notification:{
                    title : notificationDto.title,
                    body : notificationDto.body
                },
                data : {
                    id : notificationDto.data,
                    custtomer_id : notificationDto.customerId,
                    supplier_id : notificationDto.supplierId,
                    code : notificationDto.code
                }

            },
            {
                headers:{
                    'Authorization': 'key=AAAAAPPpFCA:APA91bHCVXR-M1P0i-oyGWQYknqnntCmajlZcWr_02y00R-XWtQWFycjWHmbZlwML_aQ8jOhUJQ3WU6KXbhxdfWC-_B8JMhq5_QnNm5ld5oIVWePKagK41pErUqebBG_0tLaHGLxW3sH' 
                }
            }
        ).then((response)=>{
            console.log("respuesta ", response.data);
            console.log("response notification ", response.status + "code ", response.statusText);
            //{status: "correct"}
        }).catch(error =>{
            console.log("error al enviar notificacion ", error);
        });

        return {
            status: "correct"
        }
    }

    async notificationCustomer(code : string, shoppingId : number, id : Number){
        
        try {
                const tokens = await this.tokenNotificationRepository.createQueryBuilder("token")
                                                                     .innerJoin("token.person", "person")
                                                                     .innerJoin("person.customer", "customer")
                                                                     .where("customer.id="+ id)
                                                                     .getMany();
                console.log("customer ", tokens);     
                for(const token of tokens){
                    const tokenDto = new NotificationDto();
                    tokenDto.title = "Bien.. han confirmado tu pedido";
                    tokenDto.body = "Tienes un nuevo pedido confirmado con codigo : " + code;
                    tokenDto.data = shoppingId;
                    tokenDto.customerId = id.toString();
                    tokenDto.supplierId = null;
                    tokenDto.token = token.token;
                    tokenDto.code = code;

                    this.create(tokenDto)
                }
            
        } catch (error) {
            console.log("error al enviar la notificacion al customer ", error);
        }
    }

    async notificationSupplier(code : string, shoppingId : number, list : Number[]){
        try {
            let unique = Array.from(new Set(list));
            console.log("lista unica ", unique);

            for(const id of unique){
                const supplier = await this.supplierRepository.findOne(id.toString());
                const tokens = await this.tokenNotificationRepository.createQueryBuilder("token")
                                                                     .innerJoin("token.person", "person")
                                                                     .innerJoin("person.supplier", "supplier")
                                                                     .where("supplier.id="+ id)
                                                                     .getMany();
                console.log("supplier ", tokens);
                                                                     
                for(const token of tokens){
                    const tokenDto = new NotificationDto();
                    tokenDto.title = "Yeahh.. un nuevo pedido";
                    tokenDto.body = "Tienes un nuevo pedido confirmado con codigo : " + code;
                    tokenDto.data = shoppingId;
                    tokenDto.customerId = null;
                    tokenDto.supplierId = id.toString();
                    tokenDto.token = token.token;
                    tokenDto.code = code;

                    this.create(tokenDto)
                }
            }
            
        } catch (error) {
            console.log("error al enviar la notificacion al proveedor ", error);
        }
        
    }
}
