import { Page, Block, Button, Card } from "framework7-react";

import ConfigManager from "../core/ConfigManager";
import NavigationService from "../core/NavigationService";
import AppNavbar from "../components/AppNavbar.jsx";

export default function Welcome() {
  const applicationName = ConfigManager.getValue(
    "application",
    "name",
    "USOFTECH React Base",
  );

  return (
    <Page name="welcome">
      <AppNavbar />

      <div className="app-container">
        <Block strong inset>
          <h1>Welcome to {applicationName}</h1>

          <h2>Build simply. Build confidently.</h2>

          <p>You don't need to start every project from zero.</p>

          <p>
            USOFTECH React Base provides a clean, lightweight foundation with
            the common application infrastructure already in place.
          </p>
        </Block>

        <Card>
          <Block>
            <h3>Less boilerplate.</h3>

            <p>Less complexity. More time to build what matters.</p>
          </Block>
        </Card>

        <Block strong inset>
          <h3>Simple</h3>

          <p>Keep the architecture clear and understandable.</p>

          <h3>Lightweight</h3>

          <p>Use only what the application actually needs.</p>

          <h3>Reusable</h3>

          <p>Build once. Reuse across projects.</p>
        </Block>

        <Block strong inset>
          <h3>Focus on Your Application</h3>

          <p>
            Start with the Base, understand the structure, and add only the
            features your project needs.
          </p>

          <p>
            Your application should solve the business problem — not fight the
            framework.
          </p>

          <Button
            fill
            large
            onClick={() => {
              NavigationService.navigate("/dashboard/");
            }}
          >
            Explore the Base
          </Button>

          <Button
            large
            className="margin-top"
            onClick={() => {
              NavigationService.navigate("/docs/readme/");
            }}
          >
            Read Documentation
          </Button>
        </Block>
      </div>
    </Page>
  );
}
