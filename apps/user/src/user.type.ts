import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType('User', { isAbstract: true })
export class User {
  @Field()
  name: string;
}
