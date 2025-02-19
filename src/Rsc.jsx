import { renderToPipeableStream } from "react-server-dom-webpack/server.node";
import { App } from "./App.jsx";
import path from "node:path";
import fs from "node:fs";
import { Writable } from "node:stream";

const MANIFEST = fs.readFileSync(
  path.resolve(__dirname, "./react-client-manifest.json"),
  "utf8"
);
const MODULE_MAP = JSON.parse(MANIFEST);

function newWriteable() {
  return new Writable({
    construct(callback) {
      this.output = "";
      callback();
    },
    write(chunk, encoding, callback) {
      this.output += chunk.toString();
      callback();
    },
    destroy() {
      this.output = "";
    },
  });
}

async function getWriteableData(writeable) {
  return new Promise((resolve) => {
    writeable.addListener("finish", () => {
      resolve(writeable.output);
    });
  });
}

const stream = renderToPipeableStream(<App />, MODULE_MAP);

const writeable = newWriteable();
stream.pipe(writeable);
const result = getWriteableData(writeable);

export { result };
