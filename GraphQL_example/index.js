var express = require("express");

var { graphqlHTTP } = require("express-graphql");

var { buildSchema } = require("graphql");

// contruct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// the root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

var app = express();

// with graphiql:true you can see an interface that lets you enter queries
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
