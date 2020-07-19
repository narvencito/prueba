// src/config/config.service.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Category } from 'src/category/entity/category.entity';
import { Customer } from 'src/customer/entity/customer.entity';
import { Person } from 'src/person/entity/person.entity';
import { Supplier } from 'src/supplier/entity/supplier.entity';
import { Photo } from 'src/photo/entity/photo.entity';
import { Product } from 'src/product/entity/product.entity';
import { Shopping } from 'src/shopping/entity/shopping.entity';
import { ShoppingCart } from 'src/shopping-cart/entity/shoppingCart.entity';
import { ShoppingStatus } from 'src/shopping-status/entity/shoppingStatus.entity';
import { TokenNotification } from 'src/token-notification/entity/tokenNotification.entity';


require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),

      // entities: ['src/**/*.entity.js'],
      entities: [
      Category,
      Customer,
      Person,
      Supplier,
      Photo,
      Product,
      Shopping,
      ShoppingCart,
      ShoppingStatus,
      TokenNotification
      ],

      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],
      synchronize: true,
      logging: false,
      cli: {
        migrationsDir: 'src/migration',
      },

      ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
]);

export { configService };
