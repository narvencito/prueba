import { Injectable } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { Photo } from 'src/photo/entity/photo.entity';
import { PageFilterDto } from 'src/filter/dto/pageFilter.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Photo)
        private photoRepository: Repository<Photo>,
      ) {}
    
      async getAll( filters :PageFilterDto) {
        // const [data, total] = await this.productRepository.findAndCount({relations:['photos','category','supplier'] });
        try {
          if(filters.list.length == 0){
            const [data, total] = await this.productRepository.createQueryBuilder("product")
                                            .leftJoinAndSelect("product.photos", "photo")
                                            .innerJoinAndSelect("product.category", "category")
                                            .innerJoinAndSelect("product.supplier", "supplier")
                                            .where('product.name ILIKE :searchTerm', {searchTerm: `%${filters.filters[0].value}%`})
                                            .andWhere("product.stock>0")
                                            .skip(filters.paging.rows *(filters.paging.page -1 ))
                                            .take(filters.paging.rows)
                                            .getManyAndCount();

                                            return {data: data, total: total}
          }else{
            let listSearch = [];
             for (const e of filters.list){
                 listSearch.push(e.id);
             } 
            const [data, total] = await this.productRepository.createQueryBuilder("product")
                                            .leftJoinAndSelect("product.photos", "photo")
                                            .innerJoinAndSelect("product.category", "category")
                                            .innerJoinAndSelect("product.supplier", "supplier")
                                            .where('product.name ILIKE :searchTerm', {searchTerm: `%${filters.filters[0].value}%`})
                                            .andWhere("product.stock>0")
                                            .andWhere("category.id IN (:...ids)", {ids:listSearch})
                                            .skip(filters.paging.rows *(filters.paging.page -1 ))
                                            .take(filters.paging.rows)
                                            .getManyAndCount();
                                            return {data: data, total: total}
          }
          
        } catch (error) {
          console.log("error  al obtener todos los productos ", error );
        }
      }

      async get(id: number) {
        return await this.productRepository.findOne(id, {relations:['photos','category']});
      }

      async getProductsByIdSupplier(id: number, filters :PageFilterDto) {
        const [data , total ] = await this.productRepository.createQueryBuilder("product")
                                          .innerJoinAndSelect("product.supplier", "supplier")
                                          .leftJoinAndSelect("product.photos", "photos")
                                          .innerJoinAndSelect("product.category", "category")
                                          .where("supplier.id="+id)
                                          .andWhere('product.name ILIKE :searchTerm', {searchTerm: `%${filters.filters[0].value}%`})
                                          .skip(filters.paging.rows *(filters.paging.page -1 ))
                                          .take(filters.paging.rows)
                                          .getManyAndCount();

        return { data : data , total : total}
      }
    
      async create(productDto: ProductDto) {
        try {
          let productCreated = new Product();
          productCreated.name = productDto.name;
          productCreated.price = productDto.price;
          productCreated.stock = productDto.stock;
          productCreated.description = productDto.description;
          productCreated.brand = productDto.brand;
          productCreated.category = productDto.category;
          productCreated.supplier = productDto.supplier;
          //productCreated.photos = productDto.photos;

          productCreated = await this.productRepository.save(productCreated);
           for(const p of productDto.photos){
               const ph = new Photo();
               ph.url = p.url;
               ph.id = p.id;
               ph.product = productCreated;

               await this.photoRepository.save(ph);
           }

           return productCreated;

        } catch (error) {
          console.log("error al crear producto ", error);
        }
 
      }
    
      async update(id: number, productDto: ProductDto) {
        let productUpdate = await this.productRepository.findOne(id);
        productUpdate.name = productDto.name;
        productUpdate.price = productDto.price;
        productUpdate.stock = productDto.stock;
        productUpdate.description = productDto.description;
        productUpdate.brand = productDto.brand;
        productUpdate.category = productDto.category;
        productUpdate.supplier = productDto.supplier;
        //productCreated.photos = productDto.photos;

        productUpdate = await this.productRepository.save(productUpdate);
          for(const p of productDto.photos){
            let ph = await this.photoRepository.findOne(p.id);
            if(ph){
              ph.url = p.url;
              ph.product = productUpdate;
  
              await this.photoRepository.save(ph);
            }else{
              const ph = new Photo();
              ph.url = p.url;
              ph.id = p.id;
              ph.product = productUpdate;

              await this.photoRepository.save(ph);
            }
        }

        return productUpdate;
      }

      async delete(id: number): Promise<any> {
         await this.productRepository.delete(id);
      }

}
