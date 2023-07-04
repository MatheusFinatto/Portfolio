require("dotenv").config();

module.exports = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  env: { NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN },
};
