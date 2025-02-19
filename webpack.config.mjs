import path from "node:path";
import url from "node:url";
import ReactServerWebpackPlugin from "react-server-dom-webpack/plugin";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  mode: "development",
  devtool: "source-map",
  entry: {
    Client: path.resolve(__dirname, "./src/Client.jsx"),
    Ssr: path.resolve(__dirname, "/src/Ssr.jsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          format: "cjs",
          jsx: "automatic",
          loader: "jsx",
        },
      },
    ],
  },
  plugins: [new ReactServerWebpackPlugin({ isServer: false })],
};
