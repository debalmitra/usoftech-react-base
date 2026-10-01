import { f7 } from "framework7-react";

const AlertService = {
  show({ title = "Alert", text = "", button = "OK", callback = null } = {}) {
    f7.dialog.alert(text, title, () => {
      if (typeof callback === "function") {
        callback();
      }
    });
  },
};

export default AlertService;
