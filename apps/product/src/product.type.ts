import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType('Product', { isAbstract: true })
export class Product {
  @Field()
  name: string;
}
