import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Item } from './item.type';

@Resolver(of => Item)
export class ItemResolver {
  constructor() {}

  @Query(() => Item)
  async getItem() {
    return await { name: 'getItem' };
  }
}
