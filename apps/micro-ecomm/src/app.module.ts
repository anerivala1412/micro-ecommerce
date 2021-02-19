import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { AuthResolver } from './auth.resolver';
import { ProductResolver } from 'apps/product/src/product.resolver';
import { UserResolver } from 'apps/user/src/user.resolver';
import { User } from 'apps/user/src/user.type';
import { Product } from 'apps/product/src/product.type';
@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [User,Product],
      },
    }),
    // GraphqlDistributedModule.forRoot({
    //   autoSchemaFile: 'graphs/demo.gql',

    //   // optional orphaned types
    //   buildSchemaOptions: {
    //     orphanedTypes: [Product, User],
    //   },

    //   context: ctx => ctx,
    // }),
  ],
  controllers: [],
  providers: [AppService, AuthResolver, ProductResolver, UserResolver],
})
export class AppModule {}
