import * as http from "http";
const app = http.createServer((request, response) => {
  if (request.url === "/a") {
    response.write("Api a is invoked");
  } else if (request.url === "/b") response.write("Api B is invoked");
  response.end();
});
app.listen(4000, () => console.log("Simple Node server created"));
