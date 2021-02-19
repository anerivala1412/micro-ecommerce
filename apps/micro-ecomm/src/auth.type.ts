import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType('Auth', { isAbstract: true })
export class Auth {
  @Field()
  name: string;
}
