import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const outputDir = "dist/";

export default [
  {
    input: "src/index.ts", // 打包入口
    output: [
      {
        file: outputDir + pkg.main,
        format: "commonjs",
      },
      {
        file: outputDir + pkg.module,
        format: "esm",
      },
      {
        file: outputDir + "index.min.js",
        format: "iife",
        name: "VueCompositions",
        exports: "named",
        extend: true,
        globals: {
          vue: "Vue",
        },
      },
    ],
    plugins: [
      // 打包插件
      resolve(), // 查找和打包node_modules中的第三方模块
      commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
      typescript(), // 解析TypeScript
      terser(),
    ],
    external: ["vue", "vue-demi"],
  },
  {
    // 生成 .d.ts 类型声明文件
    input: "src/index.ts",
    output: {
      file: outputDir + pkg.types,
      format: "es",
    },
    plugins: [dts()],
  },
];
