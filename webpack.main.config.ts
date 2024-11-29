import type { Configuration } from "webpack";
import path from "path";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/index.ts",
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins,
  resolve: {
    alias: {
      "@app": path.join(__dirname, "/src/app"),
      "@entities": path.join(__dirname, "./src/entities"),
      "@pages": path.join(__dirname, "./src/pages"),
      "@shared": path.join(__dirname, "./src/shared"),
      "@widgets": path.join(__dirname, "./src/widgets"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
