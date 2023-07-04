const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");
module.exports = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
  env: { NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN },
};
