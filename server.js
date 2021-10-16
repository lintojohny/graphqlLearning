const express = require("express");

const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs } = require("./typeDef");
const { resolvers } = require("./resolver");

const mongoose = require("mongoose");

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, path: "/gql" });

  app.use((req, res) => {
    res.send("Hello from express apollo server");
  });

  await mongoose.connect(
    "mongodb+srv://movieRating:movie%409496@cluster0.pvpxh.mongodb.net/Cluster0?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log("Mongoose Got Connected");

  app.listen(4000, () => console.log("Server is running on port 4000"));
}

startServer();
