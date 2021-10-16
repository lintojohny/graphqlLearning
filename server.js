const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const axios = require("axios");
const app = express();
const schema = buildSchema(`
type User {
    name: String
    age: Int
    collage: String
}
type Posts {
  id: Int
  title: String
body: String
}
type Query {
    hello: String
    welcomeMessage(name: String, dateOfTheDay: String!): String
    getUser: User
    getUsers: [User]
    getPostsFromExternalAPI: [Posts]
}
input UserInput {
  name: String!
  age: Int!
  collage: String!
}
type Mutation {
  setMessage(newMessage: String): String
  createUser(user: UserInput): User
}
`);
// createUser(name: String, age: Int, collage: String): User

const root = {
  // hello: () => {
  //   return "Hello world!";
  // },
  // welcomeMessage: (args) => {
  //   return `Hey, hows life  ${args.name} the date of the day is ${args.dateOfTheDay}`;
  // },
  // getUser: () => {
  //   const user = {
  //     name: "linto",
  //     age: 30,
  //     collage: "hindustan institute",
  //   };
  //   return user;
  // },
  // getUsers: () => {
  //   const users = [
  //     {
  //       name: "linto1",
  //       age: 30,
  //       collage: "hindustan institute",
  //     },
  //     {
  //       name: "linto2",
  //       age: 33,
  //       collage: "hindustan institute3",
  //     },
  //   ];
  //   return users;
  // },
  // getPostsFromExternalAPI: async () => {
  //   const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(posts);
  //   return posts.data;
  // },
  setMessage: ({ newMessage }) => {
    message = newMessage;
    return message;
  },
  createUser: (args) => {
    console.log(args);
    return args.user;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
  })
);
app.listen(4000, () => console.info(`server on port 4000`));
