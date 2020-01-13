const ThreadsPlugin = require("threads-plugin");

module.exports = {
  configureWebpack: {
    externals: {
      "tiny-worker": "tiny-worker"
    },
    plugins: [new ThreadsPlugin()]
  }
};
