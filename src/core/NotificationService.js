import { f7 } from "framework7-react";

const NotificationService = {
  show({ title = "", subtitle = "", text = "", closeTimeout = 3000 } = {}) {
    f7.notification
      .create({
        title,
        subtitle,
        text,
        closeTimeout,
      })
      .open();
  },

  success(text, options = {}) {
    this.show({
      ...options,
      text,
    });
  },

  error(text, options = {}) {
    this.show({
      ...options,
      text,
    });
  },

  info(text, options = {}) {
    this.show({
      ...options,
      text,
    });
  },
};

export default NotificationService;
