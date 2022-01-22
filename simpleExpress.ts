import * as express from "express";
const app = express();
const router = express.Router();
router.get("/a", (_request, response) =>
  response.send("api a is invoked from express")
);
app.use(router);
app.listen(4000, () => console.log("Simple Express server created"));
