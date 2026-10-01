import { useEffect } from "react";

import { App as Framework7App, View, f7 } from "framework7-react";

import routes from "./routes";
import ThemeService from "../core/ThemeService";
import AppMenu from "../components/AppMenu.jsx";

const preferences = ThemeService.getPreferences();

const f7params = {
  theme: ThemeService.getPlatform(preferences.platform),

  colors: {
    primary: ThemeService.getColor(preferences.color),
  },

  darkMode: ThemeService.getDarkMode(preferences.colorScheme),

  view: {
    browserHistory: true,

    browserHistoryRoot: window.location.origin,

    browserHistorySeparator: "",

    browserHistoryInitialMatch: true,
  },
};

export default function App() {
  useEffect(() => {
    const handlePageBeforeOut = (page) => {
      const activeElement = document.activeElement;

      if (activeElement && page.el?.contains(activeElement)) {
        activeElement.blur();
      }
    };

    f7.on("pageBeforeOut", handlePageBeforeOut);

    return () => {
      f7.off("pageBeforeOut", handlePageBeforeOut);
    };
  }, []);

  return (
    <Framework7App {...f7params} routes={routes}>
      <AppMenu />

      <View main url={window.location.pathname} />
    </Framework7App>
  );
}
