import { Module } from '@nestjs/common';
import { GraphQLModule, GraphQLFederationModule } from '@nestjs/graphql';
import { ProductResolver } from './product.resolver';
import { User } from 'apps/user/src/user.type';
import { UserResolver } from 'apps/user/src/user.resolver';
import { Product } from './product.type';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
    // GraphQLFederationModule.forRoot({
    //   autoSchemaFile: true,
    //   buildSchemaOptions: {
    //     orphanedTypes: [User,Product],
    //   },
    // }),
  ],
  controllers: [],
  providers: [ProductResolver, UserResolver],
})
export class ProductModule {}
