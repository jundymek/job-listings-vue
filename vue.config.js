module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/job-listings-vue/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};
