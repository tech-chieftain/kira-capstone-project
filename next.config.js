/* eslint-disable */
const { i18n } = require("./next-i18next.config");
const path = require("path");

module.exports = {
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
