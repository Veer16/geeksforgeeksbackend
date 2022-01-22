import * as koa from "koa";

import * as Router from "koa-router";

const app = new koa();
const router = new Router();

router.get("/a", (context) => (context.response.body = "Koa api is invoked"));

app.use(router.routes());
app.listen(process.env.PORT || 3000, () =>
  console.log("Simple KOA server created")
);
