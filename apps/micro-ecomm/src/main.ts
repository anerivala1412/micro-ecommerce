import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log({ app });
  console.log('4000 Product + user');
  await app.listen(4000);
}
bootstrap();

// import 'reflect-metadata';
// import { ApolloGateway } from '@apollo/gateway';
// import { ApolloServer } from 'apollo-server';

// async function bootstrap() {
//   const serviceList = [
//     { name: 'user', url: 'http://localhost:3001/graphql' },
//     { name: 'item', url: 'http://localhost:3000/graphql' },
//   ];

//   const gateway = new ApolloGateway({
//     serviceList,
//   });

//   const { schema, executor } = await gateway.load();

//   const server = new ApolloServer({
//     schema,
//     executor,
//     tracing: false,
//     playground: true,
//   });

//   server.listen({ port: 4000 }).then(({ url }) => {
//     console.log(`Apollo Gateway ready at ${url}`);
//   });
// }

// bootstrap().catch(console.error);
