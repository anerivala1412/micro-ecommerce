import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemResolver } from './item.resolver';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';
@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [ItemService, ItemResolver],
})
export class ItemModule {}
