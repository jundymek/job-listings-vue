module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/ip-tracker-vue/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};
