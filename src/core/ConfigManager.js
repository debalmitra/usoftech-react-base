import Storage from "./Storage";

const CONFIG_KEY = "usoftech_config";

const ConfigManager = {
  config: null,
  application: null,

  set(config) {
    this.config = config;
  },

  get() {
    return this.config;
  },

  getSection(section) {
    return this.config?.[section] ?? {};
  },

  getValue(section, key, defaultValue = null) {
    return this.config?.[section]?.[key] ?? defaultValue;
  },

  setApplication(application) {
    this.application = application;
  },

  getApplication() {
    return this.application;
  },

  loadLocal() {
    const stored = Storage.get(CONFIG_KEY);

    if (!stored) {
      return null;
    }

    try {
      const config = JSON.parse(stored);

      this.config = config;

      return config;
    } catch {
      Storage.remove(CONFIG_KEY);

      return null;
    }
  },

  saveLocal(config) {
    this.config = config;

    Storage.set(CONFIG_KEY, JSON.stringify(config));
  },

  clear() {
    this.config = null;
    this.application = null;

    Storage.remove(CONFIG_KEY);
  },
};

export default ConfigManager;
