import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'apps/user/src/user.type';
@ObjectType()
@Directive('@key(fields: "id")')
export class Product {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  authorId: number;

  @Field((type) => User)
  user?: User;
}