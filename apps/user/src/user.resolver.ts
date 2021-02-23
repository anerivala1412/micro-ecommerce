import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { User } from './user.type';

@Resolver(of => User)
export class UserResolver {
  constructor() {}

  @Query(() => User)
  async getUser() {
    return await { name: 'getUser' };
  }
}
