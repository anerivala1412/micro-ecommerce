import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { GraphQLModule, GraphQLFederationModule } from '@nestjs/graphql';
import { User } from './user.type';
import { Product } from 'apps/product/src/product.type';

@Module({
  imports: [
    // GraphQLFederationModule.forRoot({
    //   autoSchemaFile: true,
    //   buildSchemaOptions: {
    //     orphanedTypes: [User,Product],
    //   },
    // }),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [UserResolver],
})
export class UserModule {}
