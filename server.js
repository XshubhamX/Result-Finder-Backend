const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { importSchema } = require("graphql-import");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const chalk = require("chalk");
const typeDefs = importSchema("./schema/schema.graphql");

const resolvers = {
  Query,
  Mutation,
};
const app = express();
const PORT = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

server.start();

server.applyMiddleware({ app });

app.listen({ port: PORT });
