import { Resolver, Query } from '@nestjs/graphql';
import { Product } from './product.type';
@Resolver(of => Product)
export class ProductResolver {
  constructor() {}

  @Query(() => Product)
  async getProduct() {
    return await { name: 'product' };
  }
}
