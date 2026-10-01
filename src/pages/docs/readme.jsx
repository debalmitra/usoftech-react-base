import {
  Page,
  Block,
  BlockTitle,
  List,
  ListItem,
  Card,
  Button,
} from "framework7-react";

import AppNavbar from "../../components/AppNavbar.jsx";

import NavigationService from "../../core/NavigationService";
import NotificationService from "../../core/NotificationService";
import AlertService from "../../core/AlertService";
import DialogService from "../../core/DialogService";
import LoadingService from "../../core/LoadingService";
import BackToTop from "../../components/BackToTop.jsx";

export default function Readme() {
  const openExamples = () => {
    NavigationService.navigate("/examples/");
  };

  const openSettings = () => {
    NavigationService.navigate("/settings/");
  };

  const testNotification = () => {
    NotificationService.success("NotificationService is working.");
  };

  const testAlert = () => {
    AlertService.show({
      title: "Base Alert",
      text: "AlertService is working.",
    });
  };

  const testDialog = () => {
    DialogService.confirm({
      title: "Base Dialog",
      text: "DialogService is working.",
      onConfirm: () => {
        NotificationService.success("Confirmed successfully.");
      },
    });
  };

  const testLoading = () => {
    LoadingService.show();

    setTimeout(() => {
      LoadingService.hide();

      NotificationService.success("LoadingService is working.");
    }, 1500);
  };

  return (
    <Page name="readme">
      <AppNavbar title="Documentation" backLink />

      <div className="app-container">
        {/* Introduction */}

        <BlockTitle>USOFTECH React Base</BlockTitle>

        <Block strong inset>
          <h2>Reusable React Application Foundation</h2>

          <p>
            USOFTECH React Base is a reusable application foundation designed
            for building modern business applications quickly and consistently.
          </p>

          <p>
            The Base provides common application infrastructure so individual
            projects can concentrate on their own business logic.
          </p>
        </Block>

        {/* Architecture */}

        <BlockTitle>Architecture</BlockTitle>

        <Card>
          <Block>
            <p>The Base follows a clean frontend and backend separation.</p>

            <List dividersIos>
              <ListItem title="Frontend" after="React + Vite" />

              <ListItem title="UI Framework" after="Framework7 React" />

              <ListItem title="Backend" after="PHP REST API" />

              <ListItem title="Database" after="MySQL / MariaDB" />

              <ListItem title="Communication" after="REST / JSON" />
            </List>
          </Block>
        </Card>

        {/* Configuration */}

        <BlockTitle>Configuration</BlockTitle>

        <Block strong inset>
          <h3>Application Configuration</h3>

          <p>
            The application receives its master configuration from the central
            PHP REST API.
          </p>

          <p>
            Configuration includes application information, company information,
            API settings, system settings, UI defaults, features and settings.
          </p>

          <pre className="app-code-block">
            <code>
              {`{
    "application": {
        "name": "My Application",
        "version": "1.0.0",
        "environment": "production",
        "maintenance": false
    },

    "company": {
        "name": "Usoftech",
        "website": "https://usoftech.in"
    },

    "api": {
        "base_url": "https://example.com",
        "app_auth_endpoint": "/app_auth/",
        "timeout": 15000
    },

    "system": {
        "timezone": "Asia/Kolkata",
        "date_format": "Y-m-d",
        "time_format": "H:i:s",
        "currency": "INR",
        "locale": "en-IN"
    }
}`}
            </code>
          </pre>
        </Block>

        {/* Local Preferences */}

        <BlockTitle>Local Preferences</BlockTitle>

        <Block strong inset>
          <p>User interface preferences are stored locally in the browser.</p>

          <List dividersIos>
            <ListItem title="Platform" after="System / iOS / Android" />

            <ListItem title="Color Scheme" after="System / Light / Dark" />

            <ListItem title="Color" after="Framework7 Theme Color" />

            <ListItem title="Page Transition" after="Framework7 Transition" />
          </List>

          <p>
            Local preferences override the server UI defaults. Clearing local
            preferences causes the application to use the server defaults again.
          </p>

          <Button fill onClick={openSettings}>
            Open Settings
          </Button>
        </Block>

        {/* API Configuration */}

        <BlockTitle>API Configuration</BlockTitle>

        <Block strong inset>
          <p>
            API connection details are defined through the application API
            configuration.
          </p>

          <pre className="app-code-block">
            <code>
              {`const ApiConfig = {

    baseUrl: "https://example.com",

    appAuthEndpoint:
        "/react_base_app_auth/",

    appId: 1,

    appKey:
        "your-application-key",

    apiKey:
        "your-api-key",

};`}
            </code>
          </pre>

          <p>
            The Bootstrap process authenticates the application with the central
            API and loads the latest application configuration before React
            starts.
          </p>
        </Block>

        {/* Bootstrap */}

        <BlockTitle>Application Startup</BlockTitle>

        <Block strong inset>
          <p>
            The application starts through the Bootstrap process before
            rendering the React application.
          </p>

          <pre className="app-code-block">
            <code>
              {`main.jsx
    ↓
Bootstrap.start()
    ↓
REST API
    ↓
Application Verification
    ↓
Latest Configuration
    ↓
ConfigManager
    ↓
React / Framework7
    ↓
Application`}
            </code>
          </pre>
        </Block>

        {/* Core Services */}

        <BlockTitle>Core Services</BlockTitle>

        <Block strong inset>
          <p>
            Common application functionality is provided through reusable
            services.
          </p>

          <List strongIos outlineIos insetIos>
            <ListItem title="AlertService" after="Alerts" />

            <ListItem title="NotificationService" after="Notifications" />

            <ListItem title="DialogService" after="Dialogs" />

            <ListItem title="LoadingService" after="Loading" />

            <ListItem title="NavigationService" after="Navigation" />

            <ListItem title="PreferenceService" after="Preferences" />

            <ListItem title="ConfigManager" after="Configuration" />

            <ListItem title="Storage" after="Local Storage" />

            <ListItem title="Validation" after="Form Validation" />
          </List>
        </Block>

        {/* Usage */}

        <BlockTitle>How To Use</BlockTitle>

        <Block strong inset>
          <h3>Notification</h3>

          <pre className="app-code-block">
            <code>
              {`import NotificationService
    from "../core/NotificationService";

NotificationService.success(
    "Supplier saved successfully."
);`}
            </code>
          </pre>

          <h3>Alert</h3>

          <pre className="app-code-block">
            <code>
              {`import AlertService
    from "../core/AlertService";

AlertService.show({
    title: "Error",
    text: "Unable to save supplier."
});`}
            </code>
          </pre>

          <h3>Confirmation Dialog</h3>

          <pre className="app-code-block">
            <code>
              {`import DialogService
    from "../core/DialogService";

DialogService.confirm({

    title: "Delete Supplier",

    text:
        "Are you sure you want to delete this supplier?",

    onConfirm: () => {

        // Delete record

    }

});`}
            </code>
          </pre>

          <h3>Loading</h3>

          <pre className="app-code-block">
            <code>
              {`import LoadingService
    from "../core/LoadingService";

LoadingService.show();

try {

    // API request

} finally {

    LoadingService.hide();

}`}
            </code>
          </pre>
        </Block>

        {/* Live Tests */}

        <BlockTitle>Live Service Tests</BlockTitle>

        <Block strong inset>
          <p>Test the Base services directly from this documentation page.</p>

          <div className="grid grid-cols-2 grid-gap">
            <Button fill onClick={testNotification}>
              Notification
            </Button>

            <Button fill onClick={testAlert}>
              Alert
            </Button>

            <Button fill onClick={testDialog}>
              Dialog
            </Button>

            <Button fill onClick={testLoading}>
              Loading
            </Button>
          </div>
        </Block>

        {/* Examples */}

        <BlockTitle>Working Examples</BlockTitle>

        <Block strong inset>
          <p>
            The Examples section contains working demonstrations of reusable
            Base functionality.
          </p>

          <Button fill onClick={openExamples}>
            Open Examples
          </Button>
        </Block>

        <BlockTitle>Installation & Setup</BlockTitle>

        <Block strong inset>
          <h3>Creating Your First Project. </h3>

          <p>
            <i>Start a New Project</i>
            <br />
            The USOFTECH React Base is intended to be used as the starting point
            for new applications. Clone or copy the Base project and use it as
            the foundation for your application.
          </p>

          <h3>1. Clone the Base</h3>

          <pre className="app-code-block">
            <code>
              {`git clone <repository-url> my-project
cd my-project`}
            </code>
          </pre>

          <h3>2. Install Dependencies</h3>

          <pre className="app-code-block">
            <code>{`npm install`}</code>
          </pre>

          <h3>3. Configure the Application</h3>

          <p>
            Update the application API configuration and connect the project to
            its PHP REST API.
          </p>

          <pre className="app-code-block">
            <code>{`src/core/ApiConfig.js`}</code>
          </pre>

          <h3>4. Start Development</h3>

          <pre className="app-code-block">
            <code>{`npm run dev`}</code>
          </pre>

          <p>
            Vite will start the development server and provide the local
            application URL.
          </p>
        </Block>

        <Block strong inset>
          <h3>Production Build</h3>

          <p>
            When development is complete, create the production build using
            Vite.
          </p>

          <pre className="app-code-block">
            <code>{`npm run build`}</code>
          </pre>

          <p>
            The generated files are placed in the
            <strong> dist </strong>
            directory and can be deployed to the production web server.
          </p>

          <h3>Preview Production Build</h3>

          <pre className="app-code-block">
            <code>{`npm run preview`}</code>
          </pre>
        </Block>

        {/* Project Structure */}

        <BlockTitle>Recommended Project Structure</BlockTitle>

        <Block strong inset>
          <pre className="app-code-block">
            <code>
              {`src/
│
├── app/
│   ├── App.jsx
│   ├── bootstrap.js
│   ├── config.js
│   └── routes.js
│
├── components/
│   ├── AppNavbar.jsx
│   ├── AppMenu.jsx
│   └── AuthPage.jsx
│
├── core/
│   ├── Api.js
│   ├── ConfigManager.js
│   ├── NavigationService.js
│   ├── PreferenceService.js
│   ├── Storage.js
│   ├── ThemeService.js
│   ├── Validation.js
│   ├── AlertService.js
│   ├── NotificationService.js
│   ├── DialogService.js
│   └── LoadingService.js
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Settings.jsx
│   ├── Examples.jsx
│   └── docs/
│       └── readme.jsx
│
└── styles/
    └── app.css`}
            </code>
          </pre>
        </Block>

        {/* Development Principle */}

        <BlockTitle>Development Principle</BlockTitle>

        <Block strong inset>
          <p>The Base contains reusable infrastructure.</p>

          <p>Individual projects contain business-specific functionality.</p>

          <p>
            For example, Suppliers, Products, Purchases, Invoices and Reports
            belong to the project, while API, authentication, navigation,
            preferences, themes, dialogs, notifications and loading belong to
            the Base.
          </p>
        </Block>

        <Block strong inset className="text-align-center">
          <h3>Contribute to the Foundation</h3>

          <p>
            Help keep the Base simple, lightweight and reusable. Learn how to
            add improvements without introducing unnecessary complexity.
          </p>

          <Button
            fill
            onClick={() => {
              NavigationService.navigate("/docs/contribution/");
            }}
          >
            Read Contribution Guide
          </Button>
        </Block>

        {/* Quick Links */}

        <BlockTitle>Quick Links</BlockTitle>

        <List strongIos outlineIos insetIos>
          <ListItem
            title="Settings"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              openSettings();
            }}
          />

          <ListItem
            title="Examples"
            link="#"
            onClick={(event) => {
              event.preventDefault();
              openExamples();
            }}
          />
        </List>
      </div>
      <BackToTop />
    </Page>
  );
}
