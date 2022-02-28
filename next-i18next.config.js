const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ku"],
    localePath: path.resolve("./public/locales"),
    reloadOnPrerender: true, // comment out in production
  },
  react: {
    useSuspense: false,
  },
};
