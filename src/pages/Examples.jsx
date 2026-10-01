import {
  Page,
  Block,
  List,
  ListItem,
  Button,
  BlockTitle,
} from "framework7-react";

import AppNavbar from "../components/AppNavbar.jsx";

import AlertService from "../core/AlertService";
import NotificationService from "../core/NotificationService";
import DialogService from "../core/DialogService";
import LoadingService from "../core/LoadingService";

export default function Examples() {
  const showAlert = () => {
    AlertService.show({
      title: "Example Alert",
      text: "This is a Framework7 alert from AlertService.",
    });
  };

  const showNotification = () => {
    NotificationService.success("This is an example notification.");
  };

  const showErrorNotification = () => {
    NotificationService.error("This is an example error notification.");
  };

  const showConfirm = () => {
    DialogService.confirm({
      title: "Confirm Action",
      text: "Do you want to continue?",
      onConfirm: () => {
        NotificationService.success("You selected OK.");
      },
    });
  };

  const showPrompt = () => {
    DialogService.prompt({
      title: "Enter Name",
      text: "Please enter your name.",
      onConfirm: (value) => {
        if (value) {
          NotificationService.success(`Hello, ${value}!`);
        }
      },
    });
  };

  const showLoading = () => {
    LoadingService.show();

    setTimeout(() => {
      LoadingService.hide();

      NotificationService.success("Loading completed.");
    }, 2000);
  };

  return (
    <Page name="examples">
      <AppNavbar title="Examples" backLink />

      <div className="app-container">
        <BlockTitle>Base Services</BlockTitle>

        <List strongIos outlineIos insetIos>
          <ListItem
            title="Alert"
            after="Show"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              showAlert();
            }}
          />

          <ListItem
            title="Notification"
            after="Show"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              showNotification();
            }}
          />

          <ListItem
            title="Error Notification"
            after="Show"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              showErrorNotification();
            }}
          />

          <ListItem
            title="Confirm Dialog"
            after="Show"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              showConfirm();
            }}
          />

          <ListItem
            title="Prompt Dialog"
            after="Show"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              showPrompt();
            }}
          />

          <ListItem
            title="Loading"
            after="Show"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              showLoading();
            }}
          />
        </List>

        <Block strong inset>
          <p>
            This page is used to test and demonstrate reusable USOFTECH React
            Base services.
          </p>

          <Button fill onClick={showAlert}>
            Test Alert
          </Button>
        </Block>
      </div>
    </Page>
  );
}
