import Api from "../core/Api";
import ApiConfig from "../core/ApiConfig";
import ConfigManager from "../core/ConfigManager";

function applyApplicationMetadata(config) {
  const application = config?.application || {};

  if (application.name) {
    document.title = application.name;
  }

  if (application.favicon) {
    const favicon = document.querySelector('link[rel="icon"]');

    if (favicon) {
      favicon.href = application.favicon;
    }
  }
}

const Bootstrap = {
  async start() {

    const response = await Api.postForm(
      ApiConfig.appAuthEndpoint,
      {
        app_id: ApiConfig.appId,
        app_key: ApiConfig.appKey,
      }
    );

    if (!response.success) {
      throw new Error(
        response.message ||
        "Application verification failed."
      );
    }

    const application = response.data.application;
    const config = response.data.config;

    ConfigManager.setApplication(application);
    ConfigManager.saveLocal(config);

    applyApplicationMetadata(config);

    // Remove the pre-React startup screen
    const startupScreen =
      document.getElementById("startup-screen");

    if (startupScreen) {
      startupScreen.remove();
    }

    return {
      application,
      config,
    };
  },
};

export default Bootstrap;