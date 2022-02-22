const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ESLintPlugin({
        context: "src",
        extensions: [".vue", ".js", ".ts"],
        fix: true
      })
    ]
  }
}
