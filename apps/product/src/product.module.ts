import { Module } from '@nestjs/common';
import { GraphQLModule, GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';
import { ProductResolver } from './product.resolver';
@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'product/product.gql'),
    }),
  ],
  controllers: [],
  providers: [ProductResolver],
})
export class ProductModule {}
