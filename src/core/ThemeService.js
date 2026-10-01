import Preferences from "./Preferences";
import ConfigManager from "./ConfigManager";

const ThemeService = {
  colors: {
    primary: "#007aff",
    red: "#ff3b30",
    green: "#4cd964",
    blue: "#2196f3",
    pink: "#ff2d55",
    yellow: "#ffcc00",
    orange: "#ff9500",
    purple: "#9c27b0",
    deeppurple: "#673ab7",
    lightblue: "#5ac8fa",
    teal: "#009688",
    lime: "#cddc39",
    deeporange: "#ff6b22",
    white: "#ffffff",
    black: "#000000",
  },

  getPreferences() {
    const uiConfig = ConfigManager.getSection("ui");

    return Preferences.get(uiConfig);
  },

  getColor(color) {
    return this.colors[color] || this.colors.primary;
  },

  getPlatform(platform) {
    const platforms = {
      system: "auto",
      ios: "ios",
      android: "md",
    };

    return platforms[platform] || "auto";
  },

  getDarkMode(colorScheme) {
    if (colorScheme === "dark") {
      return true;
    }

    if (colorScheme === "light") {
      return false;
    }

    return "auto";
  },

  getTransition(transition) {
    const transitions = {
      default: null,
      circle: "f7-circle",
      cover: "f7-cover",
      "cover-v": "f7-cover-v",
      dive: "f7-dive",
      fade: "f7-fade",
      flip: "f7-flip",
      parallax: "f7-parallax",
      push: "f7-push",
    };

    return transitions[transition] ?? null;
  },
};

export default ThemeService;
