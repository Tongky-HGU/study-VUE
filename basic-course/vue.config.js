const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //! prefetch 종료
  // chainWebpack: (config) => {
  //   config.plugins.delete("prefetch");
  // },
});
