import Preferences from "./Preferences";
import ConfigManager from "./ConfigManager";
import ThemeService from "./ThemeService";

const PreferenceService = {
  get() {
    const uiConfig = ConfigManager.getSection("ui");

    return Preferences.get(uiConfig);
  },

  apply(app, changes = {}) {
    const current = this.get();

    const updated = {
      ...current,
      ...changes,
    };

    Preferences.set(updated);

    if (changes.color) {
      app.setColorTheme(ThemeService.getColor(changes.color));
    }

    if (changes.colorScheme) {
      app.setDarkMode(ThemeService.getDarkMode(changes.colorScheme));
    }

    return updated;
  },

  set(changes) {
    const current = this.get();

    const updated = {
      ...current,
      ...changes,
    };

    return Preferences.set(updated);
  },

  reset() {
    const uiConfig = ConfigManager.getSection("ui");

    return Preferences.reset(uiConfig);
  },
};

export default PreferenceService;
