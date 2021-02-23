import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Product } from 'apps/product/src/product.type';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID)
  @Directive('@external')
  id: number;

  @Field((type) => [Product])
  products?: Product[];
}