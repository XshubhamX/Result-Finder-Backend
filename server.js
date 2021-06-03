const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { importSchema } = require("graphql-import");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const chalk = require("chalk");
const typeDefs = importSchema("./schema/schema.graphql");
const http = require("http");
const cors = require("cors");
const resolvers = {
  Query,
  Mutation,
};

const PORT = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

const app = express();

app.use(cors());

app.get("/", (req, res) => res.json({ version: "v1", status: "healthy" }));

const httpServer = http.createServer(app);

server.applyMiddleware({ app });

httpServer.listen(PORT, () => {
  console.log(chalk.blue("Server up"));
});
