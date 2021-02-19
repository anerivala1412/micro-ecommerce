import { Resolver, Query } from '@nestjs/graphql';
import { Auth } from './auth.type';
@Resolver(of => Auth)
export class AuthResolver {
  constructor() {}

  @Query(() => Auth)
  async getAuthor() {
    return await { name: 'aneri' };
  }
}
