const express = require("express");
const dotenv = require("dotenv");
const favicon = require("serve-favicon");
const path = require("path");

const app = express();
app.disable("etag");
const PORT = process.env.PORT || 3000;
dotenv.config();

// *middlewares
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// *routes
// app.get("/favicon.ico", (req, res) => {
//   res.sendFile("./public/favicon.ico", { root: __dirname });
// });
app.get("/", (req, res) => {
  res.send("<h1>Hello Scorer</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
