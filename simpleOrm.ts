import * as koa from "koa";
import "./CreateConnection";
import hotels_csv from "./hotels_csv";

const app = new koa();
app.use(async (context) => {
  const data = await hotels_csv.find();
  context.response.body = data;
  //   const a = new hotels_csv();
  //   a.cuisines = "My Own";
  //   a.name = "Veer Singh Hotel";
  //   a.featured_image =
  //     "https://b.zmtcdn.com/data/pictures/6/18936466/49c7f25817b3e52e0e469079a69066b1.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*";
  //   a.id = 41;
});

app.listen(process.env.PORT || 4000, () =>
  console.log("Simple Koa ORM server with DB connection is added")
);
