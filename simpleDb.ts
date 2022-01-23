import * as koa from "koa";
import * as Router from "koa-router";
import * as dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();
const db = new Pool({
  connectionString: process.env.URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = new koa();
app.use(async (context) => {
  db.connect();
  const data = await db.query("select * from hotels_csv");
  context.response.body = data.rows;
});
app.listen(process.env.PORT || 4000, () =>
  console.log("Simple Koa server with DB connection is added")
);
