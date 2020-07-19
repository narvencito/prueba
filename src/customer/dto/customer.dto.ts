import { PersonDto } from "src/person/dto/person.dto";

export class CustomerDto  extends PersonDto{
  readonly name: string;
}
