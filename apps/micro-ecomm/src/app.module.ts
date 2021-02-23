import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'user', url: 'http://localhost:3001/graphql' },
          { name: '/item', url: 'http://localhost:3000/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
