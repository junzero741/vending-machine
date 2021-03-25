import path from "path"
import { default as webpack } from "webpack";

import { default as HtmlWebpackPlugin } from "html-webpack-plugin";
import { default as cwpPlugin } from "clean-webpack-plugin";

// const port = process.env.PORT || 3030;

const webpackConfig = {
  mode: "development",
  
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // Creates `style` nodes from JS strings
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      
    ],
  },
  plugins: [
    new cwpPlugin.CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!manifest.json'],
    }), // 플러그인의 구현 구조 때문에 직접 constructor 호출이 불가
    new HtmlWebpackPlugin({
      template: './src/public/index.html', // 템플릿 경로
      hash: true, //핑거 프린트
      // templateParameters: { // 템플릿에 주입할 파라미터 변수 지정
      //   env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
      // },
    }),
  ],
  entry: {
    index: "/src/public/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("./build"),
  },

  // webpack-dev-server 관련
  devServer: {
    contentBase: path.resolve("./build"),
    inline: true,
    hot: true,
    host: "localhost",
    port: 3030
  },
  devtool: 'cheap-module-source-map'
}
export default webpackConfig;