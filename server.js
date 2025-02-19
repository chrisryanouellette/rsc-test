const path = require("node:path");
const fs = require("node:fs");
const express = require("express");

globalThis.self = globalThis;

const app = express();
const port = 3000;

app.use(express.static("dist"));

app.get("/", async (req, res) => {
  let file = fs.readFileSync(path.resolve(__dirname, "./index.html"));
  const rsc = await import("./dist/Rsc.js");
  const app = await import("./dist/Ssr.js");
  file = file.toString().replace("<!--INJECT-->", app.default.html);
  const result = await rsc.default.result;
  file = file.toString().replace("/*INJECT*/", result);
  res.send(file).end();
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
