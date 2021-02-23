import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { User } from './user.type';
import { Product } from 'apps/product/src/product.type';
import { ProductService } from 'apps/product/src/product.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => User)
  async getUser() {
    return await { name: 'getUser' };
  }

  @ResolveField(of => [Product])
  public posts(@Parent() user: User): String[] {
    return this.productService.getAll();
  }
}
