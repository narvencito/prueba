import { PersonDto } from "src/person/dto/person.dto";

export class SupplierDto  extends PersonDto{
  readonly descripcion: string;
  readonly latitud: string;
  readonly longitud: string;
}
