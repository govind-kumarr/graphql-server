import { config } from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import { makeConnection } from "./db/db.js";
import cors from "cors";
import colors from "colors";

config();
const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use("/", (req, res) => {
  res.send(`App is listening on ${process.env.PORT}`);
});

const startServer = () =>
  app.listen(process.env.PORT, () =>
    console.log(`App is listening on ${process.env.PORT}`.gray.underline.bold)
  );

makeConnection(startServer);
