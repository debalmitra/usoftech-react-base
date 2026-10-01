import Storage from "./Storage";

const PREFERENCES_KEY = "usoftech_preferences";

const Preferences = {
  getDefaults(serverUI = {}) {
    return {
      platform: serverUI.platform || "system",
      colorScheme: serverUI.color_scheme || "system",
      color: serverUI.color || "blue",
      pageTransition: "default",
    };
  },

  get(serverUI = {}) {
    const defaults = this.getDefaults(serverUI);

    const stored = Storage.get(PREFERENCES_KEY);

    if (!stored) {
      return defaults;
    }

    try {
      return {
        ...defaults,
        ...JSON.parse(stored),
      };
    } catch {
      Storage.remove(PREFERENCES_KEY);

      return defaults;
    }
  },

  set(preferences) {
    const current = this.get();

    const updated = {
      ...current,
      ...preferences,
    };

    Storage.set(PREFERENCES_KEY, JSON.stringify(updated));

    return updated;
  },

  reset(serverUI = {}) {
    Storage.remove(PREFERENCES_KEY);

    return this.getDefaults(serverUI);
  },
};

export default Preferences;
