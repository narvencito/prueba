import { FilterDto } from "./filter.dto";
import { PageDto, ListDto } from "./paging.dto";

export class PageFilterDto {
    readonly order : string;
    readonly filters : [FilterDto];
    readonly paging : PageDto;
    readonly list : ListDto[]
  }