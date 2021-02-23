import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'user/user.gql'),
    }),
  ],
  controllers: [],
  providers: [UserResolver],
})
export class UserModule {}
