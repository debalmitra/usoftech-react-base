import { f7 } from "framework7-react";

import Preferences from "./Preferences";
import ThemeService from "./ThemeService";

const NavigationService = {
  navigate(path, options = {}) {
    const preferences = Preferences.get();

    const transition = ThemeService.getTransition(preferences.pageTransition);

    const navigationOptions = {
      ...options,
    };

    if (transition) {
      navigationOptions.transition = transition;
    }

    return f7.views.main.router.navigate(path, navigationOptions);
  },

  back(options = {}) {
    const preferences = Preferences.get();

    const transition = ThemeService.getTransition(preferences.pageTransition);

    const navigationOptions = {
      ...options,
    };

    if (transition) {
      navigationOptions.transition = transition;
    }

    return f7.views.main.router.back(navigationOptions);
  },
};

export default NavigationService;
