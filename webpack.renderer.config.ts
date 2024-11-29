import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins, resolvePlugins } from "./webpack.plugins";

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    plugins: resolvePlugins,
    fallback: {
      fs: false,
      os: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      assert: false,
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    // modules: [webpackPaths.srcPath, "node_modules"],
  },
};
