import * as koa from "koa";
import { buildSchema } from "type-graphql";
import "./CreateConnection";
import HotelResolver from "./HotelResolver";
import { ApolloServer } from "apollo-server-koa";
import * as Router from "koa-router";
import * as graphqlHttp from "koa-graphql";
import * as cors from "@koa/cors";
import { graphqlHTTP } from "koa-graphql";

async function main() {
  //create app
  const app = new koa();

  //graphql server

  const schema = await buildSchema({ resolvers: [HotelResolver] });
  const appolo = new ApolloServer({ schema });
  appolo.applyMiddleware({ app });

  //create router
  const router = new Router();
  router.get("/graphql", graphqlHTTP({ schema: schema }));
  app.use(router.routes());

  //enabling cors in backend

  app.use(cors());
  app.listen(4000, () => console.log("Simple KOA GRAPHQL server created"));
}
main();
