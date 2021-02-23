import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';
@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'item.gql'),
    }),
  ],
  controllers: [],
  providers: [ItemService, ItemResolver],
})
export class ItemModule {}
