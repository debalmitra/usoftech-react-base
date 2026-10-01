import { Block, BlockTitle, List, ListItem } from "framework7-react";

import ConfigManager from "../core/ConfigManager";
import NavigationService from "../core/NavigationService";

import AppNavbar from "../components/AppNavbar.jsx";
import AuthPage from "../components/AuthPage.jsx";

export default function Dashboard() {
  const applicationName = ConfigManager.getValue(
    "application",
    "name",
    "USOFTECH React Base",
  );

  const applicationVersion = ConfigManager.getValue(
    "application",
    "version",
    "1.0.0",
  );

  const open = (path) => {
    NavigationService.navigate(path);
  };

  return (
    <AuthPage name="dashboard">
      <AppNavbar />

      <div className="app-container">
        <Block strong inset>
          <h1>{applicationName}</h1>

          <p>
            A reusable React application foundation for building modern business
            applications.
          </p>

          <p>Version {applicationVersion}</p>
        </Block>

        <BlockTitle>Technology</BlockTitle>

        <List strongIos outlineIos insetIos>
          <ListItem title="Frontend" after="React + Vite" />

          <ListItem title="UI" after="Framework7 React" />

          <ListItem title="Backend" after="PHP REST API" />

          <ListItem title="Database" after="MySQL / MariaDB" />

          <ListItem title="Architecture" after="SPA + REST" />
        </List>

        <BlockTitle>Developer Resources</BlockTitle>

        <List strongIos outlineIos insetIos>
          <ListItem
            title="Documentation & Configuration"
            subtitle="How to configure and use the Base"
            link="#"
            onClick={(event) => {
              event.preventDefault();

              NavigationService.navigate("/docs/readme/");
            }}
          />

          <ListItem
            title="Settings"
            subtitle="Theme and application preferences"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              open("/settings/");
            }}
          />

          <ListItem
            title="Examples"
            subtitle="Live Base service examples"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              open("/examples/");
            }}
          />
        </List>

        <Block strong inset>
          <h3>Build With the Base</h3>

          <p>
            Start with the Base infrastructure and add only the business modules
            required by your project.
          </p>

          <p>
            This keeps projects consistent, lightweight and easier to maintain.
          </p>
        </Block>
      </div>
    </AuthPage>
  );
}
