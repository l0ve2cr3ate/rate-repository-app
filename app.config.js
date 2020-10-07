import "dotenv/config";

const APOLLO_URI = process.env.APOLLO_URI;

export default {
  expo: {
    name: "rate-repository-app",
    extra: { apolloUri: APOLLO_URI },
    slug: "rate-repository-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
   
  },
};
