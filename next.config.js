require("dotenv").config();

module.exports = {
  images: {
    domains: ["raw.githubusercontent.com", "counter3.optistats.ovh"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "counter3.optistats.ovh",
      },
    ],
  },
  env: { NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN },
};
