import { f7 } from "framework7-react";

const LoadingService = {
  show(title = "Loading...") {
    f7.preloader.show();

    return title;
  },

  hide() {
    f7.preloader.hide();
  },
};

export default LoadingService;
