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
import BackToTop from "../../components/BackToTop.jsx";

export default function Contribution() {
  const openExamples = () => {
    NavigationService.navigate("/examples/");
  };

  const openDocumentation = () => {
    NavigationService.navigate("/docs/readme/");
  };

  return (
    <Page name="contribution">
      <AppNavbar title="Contribution" backLink />

      <div className="app-container">
        {/* Introduction */}

        <Block strong inset>
          <h1>Contribute to the Base</h1>

          <p>
            The USOFTECH React Base is designed to grow carefully while
            remaining simple, lightweight and reusable.
          </p>

          <p>
            Contributions should improve the foundation without adding
            unnecessary complexity.
          </p>
        </Block>

        {/* Before You Contribute */}

        <BlockTitle>Before You Contribute</BlockTitle>

        <Card>
          <Block>
            <p>
              Understand the existing architecture before introducing a new
              feature or dependency.
            </p>

            <List strongIos outlineIos insetIos mediaList>
              <ListItem
                title="Keep it simple"
                subtitle="Avoid unnecessary abstraction"
              />

              <ListItem
                title="Keep it lightweight"
                subtitle="Prefer existing capabilities"
              />

              <ListItem
                title="Keep it reusable"
                subtitle="Build for future projects"
              />

              <ListItem
                title="Keep it consistent"
                subtitle="Follow the Base architecture"
              />
            </List>
          </Block>
        </Card>

        {/* What Belongs */}

        <BlockTitle>What Belongs in the Base?</BlockTitle>

        <Block strong inset>
          <p>
            A feature generally belongs in the Base when it is useful across
            multiple applications.
          </p>

          <List strongIos outlineIos insetIos mediaList>
            <ListItem
              title="Core Services"
              subtitle="API, storage, navigation, validation"
            />

            <ListItem
              title="Authentication Infrastructure"
              subtitle="Reusable login and authorization structure"
            />

            <ListItem
              title="UI Infrastructure"
              subtitle="Themes, preferences and common components"
            />

            <ListItem
              title="Developer Tools"
              subtitle="Documentation and examples"
            />
          </List>
        </Block>

        {/* What Does Not Belong */}

        <BlockTitle>What Does Not Belong?</BlockTitle>

        <Block strong inset>
          <p>
            Business-specific functionality should remain inside the individual
            project.
          </p>

          <List strongIos outlineIos insetIos>
            <ListItem title="Suppliers" after="Project" />

            <ListItem title="Products" after="Project" />

            <ListItem title="Purchases" after="Project" />

            <ListItem title="Invoices" after="Project" />

            <ListItem title="Business Reports" after="Project" />
          </List>
        </Block>

        {/* Contribution Process */}

        <BlockTitle>Contribution Process</BlockTitle>

        <Block strong inset>
          <h3>1. Understand</h3>

          <p>
            Read the documentation and understand the existing architecture.
          </p>

          <h3>2. Design</h3>

          <p>Prefer the smallest solution that solves the problem cleanly.</p>

          <h3>3. Implement</h3>

          <p>
            Follow the existing folder structure, naming conventions and service
            patterns.
          </p>

          <h3>4. Test</h3>

          <p>
            Add or update an example when introducing reusable functionality.
          </p>

          <h3>5. Document</h3>

          <p>
            Explain how the feature is intended to be used by future developers.
          </p>
        </Block>

        {/* Adding Core Service */}

        <BlockTitle>Adding a New Core Service</BlockTitle>

        <Block strong inset>
          <p>A reusable service should normally follow this pattern:</p>

          <pre className="app-code-block">
            <code>
              {`src/core/
└── ExampleService.js`}
            </code>
          </pre>

          <p>
            The service should hide implementation details and expose a simple
            API to application code.
          </p>

          <pre className="app-code-block">
            <code>
              {`import ExampleService
    from "../core/ExampleService";

ExampleService.doSomething();`}
            </code>
          </pre>
        </Block>

        {/* Documentation & Examples */}

        <BlockTitle>Documentation & Examples</BlockTitle>

        <Block strong inset>
          <p>
            Reusable functionality should be documented and demonstrated
            whenever practical.
          </p>

          <Button fill onClick={openDocumentation}>
            Read Documentation
          </Button>

          <Button large className="margin-top" onClick={openExamples}>
            Open Examples
          </Button>
        </Block>

        {/* Contribution Principle */}

        <BlockTitle>Contribution Principle</BlockTitle>

        <Block strong inset>
          <h3>Build once. Improve carefully. Reuse everywhere.</h3>

          <p>
            Every contribution should make the Base easier to understand, easier
            to use, or more useful across future applications.
          </p>
        </Block>

        {/* Credits */}

        <BlockTitle>Credits & Acknowledgements</BlockTitle>

        <Block strong inset>
          <h3>Built Together</h3>

          <p>
            The USOFTECH React Base is the result of collaboration between human
            experience, open-source technology, and AI-assisted development.
          </p>

          <List strongIos outlineIos insetIos mediaList>
            <ListItem
              title="Debal Mitra"
              subtitle="Architecture, engineering, product direction and development"
            />

            <ListItem
              title="OpenAI / ChatGPT"
              subtitle="AI-assisted architecture, development, problem solving and documentation"
            />

            <ListItem
              title="React"
              subtitle="Frontend application foundation"
            />

            <ListItem
              title="Vite"
              subtitle="Modern frontend build and development tooling"
            />

            <ListItem
              title="Framework7"
              subtitle="Mobile-first UI framework and application experience"
            />

            <ListItem title="PHP" subtitle="REST API and backend foundation" />

            <ListItem
              title="MySQL / MariaDB"
              subtitle="Application data and configuration storage"
            />
          </List>
        </Block>

        {/* Foundation */}

        <Block strong inset>
          <h3>A Foundation Built for Developers</h3>

          <p>
            Every technology has its own role. The goal of the Base is to bring
            these technologies together into a simple, lightweight and reusable
            development foundation.
          </p>

          <p>
            Special credit goes to the open-source communities and developers
            who build, maintain and improve the technologies on which modern
            software development depends.
          </p>

          <p>And above all, this Base is built with a simple principle:</p>

          <h3>Build simply. Build confidently.</h3>
        </Block>
      </div>

      <BackToTop />
    </Page>
  );
}
