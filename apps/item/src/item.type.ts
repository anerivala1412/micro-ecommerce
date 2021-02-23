import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Item {
  @Field(type => ID)
  @Directive('@external')
  id: number;
}
