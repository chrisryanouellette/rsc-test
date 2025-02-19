import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  target: "node",
  mode: "development",
  devtool: "source-map",
  entry: {
    Rsc: path.resolve(__dirname, "/src/Rsc.jsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: 'commonjs',
    }
  },
  module: {
    rules: [
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          jsx: "automatic",
          loader: "jsx",
        },
      },
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: path.resolve(__dirname, './loader.mjs'),
      },
    ],
  },
  resolve: {
    conditionNames: ["react-server", "..."]
  },
};
