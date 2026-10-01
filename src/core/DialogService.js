import { f7 } from "framework7-react";

const DialogService = {
  confirm({
    title = "Confirm",
    text = "",
    onConfirm = null,
    onCancel = null,
  } = {}) {
    f7.dialog.confirm(
      text,
      title,
      () => {
        if (typeof onConfirm === "function") {
          onConfirm();
        }
      },
      () => {
        if (typeof onCancel === "function") {
          onCancel();
        }
      },
    );
  },

  prompt({
    title = "Input",
    text = "",
    defaultValue = "",
    onConfirm = null,
    onCancel = null,
  } = {}) {
    f7.dialog.prompt(
      text,
      title,
      (value) => {
        if (typeof onConfirm === "function") {
          onConfirm(value);
        }
      },
      (value) => {
        if (typeof onCancel === "function") {
          onCancel(value);
        }
      },
      defaultValue,
    );
  },
};

export default DialogService;
