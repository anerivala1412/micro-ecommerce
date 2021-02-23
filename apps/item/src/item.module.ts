import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';
@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'item/item.gql'),
    }),
  ],
  controllers: [ItemController],
  providers: [ItemService, ItemResolver],
})
export class ItemModule {}
