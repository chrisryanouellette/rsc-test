import url from "url";
import { transformSource } from "react-server-dom-webpack/node-loader";

export default async function (source) {
  const callback = this.async();
  if (source.indexOf("use client") === -1) return callback(null, source);
  const isModule = source.includes("import") || source.includes("export");
  if (!isModule) return callback(null, source);
  const transformed = await transformSource(
    source,
    { format: "module", url: url.pathToFileURL(this.resourcePath) },
    (arg) => ({ source: arg.toString() })
  );

  return callback(null, transformed.source);
}
