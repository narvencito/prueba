import { Controller} from '@nestjs/common';
import { ShoppingService } from './shopping.service';

@Controller('shopping')
export class ShoppingController {
    constructor(private shoppingService: ShoppingService) { }
}
