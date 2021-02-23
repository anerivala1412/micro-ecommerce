import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserService } from './user.service';
@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'user.gql'),
    }),
  ],
  controllers: [],
  providers: [UserResolver, UserService],
})
export class UserModule {}
