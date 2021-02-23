import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  ResolveReference,
} from '@nestjs/graphql';
import { User } from './user.type';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => User)
  async getUser() {
    return await { name: 'getUser' };
  }
  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.usersService.findById();
  }
}
