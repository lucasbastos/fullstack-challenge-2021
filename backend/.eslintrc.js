const { off } = require("./src/models/Products");

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "linebreak-style": 0,
    "consistent-return": off,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
