import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.react.app",
  appName: "react-native",
  bundledWebRuntime: true,
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
    },
  },
};

export default config;
