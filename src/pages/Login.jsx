import { useEffect, useState } from "react";

import {
  Page,
  Block,
  BlockTitle,
  List,
  ListInput,
  Button,
  Preloader,
} from "framework7-react";

import Storage from "../core/Storage";
import ConfigManager from "../core/ConfigManager";
import Validation from "../core/Validation";
import NavigationService from "../core/NavigationService";
import AppNavbar from "../components/AppNavbar.jsx";

export default function Login() {
  const applicationName = ConfigManager.getValue(
    "application",
    "name",
    "Application",
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Storage.getLoginState()) {
      NavigationService.navigate("/dashboard/", {
        replaceState: true,
      });
    }
  }, []);

  const handleLogin = (event) => {
    event?.preventDefault();

    if (loading) {
      return;
    }

    const validation = Validation.validate({
      username: {
        value: username,
        label: "Username",
        rules: {
          required: true,
        },
      },

      password: {
        value: password,
        label: "Password",
        rules: {
          required: true,
        },
      },
    });

    setErrors(validation.errors);

    if (!validation.valid) {
      return;
    }

    setLoading(true);

    Storage.setLoginState(true);

    NavigationService.navigate("/dashboard/");
  };

  if (loading) {
    return (
      <Page name="login">
        <div
          className="display-flex justify-content-center align-items-center"
          style={{
            height: "100%",
          }}
        >
          <Preloader color="multi" />
        </div>
      </Page>
    );
  }

  return (
    <Page name="login">
      <AppNavbar title={applicationName} backLink />

      <div className="app-container">
        <Block strong inset>
          <h2>Login</h2>

          <p>Sign in to continue.</p>

          <form onSubmit={handleLogin}>
            <List strongIos outlineIos insetIos>
              <ListInput
                label="Username"
                type="text"
                placeholder="Enter username"
                floatingLabel
                clearButton
                value={username}
                onInput={(event) => {
                  setUsername(event.target.value);

                  setErrors((current) => ({
                    ...current,
                    username: undefined,
                  }));
                }}
                errorMessage={errors.username}
                errorMessageForce={!!errors.username}
              />

              <ListInput
                label="Password"
                type="password"
                placeholder="Enter password"
                floatingLabel
                clearButton
                value={password}
                onInput={(event) => {
                  setPassword(event.target.value);

                  setErrors((current) => ({
                    ...current,
                    password: undefined,
                  }));
                }}
                errorMessage={errors.password}
                errorMessageForce={!!errors.password}
              />
            </List>

            <Button fill type="submit">
              Login
            </Button>
          </form>
        </Block>
        <Block strong inset>
          <h2>Login</h2>

          <p>
            This page demonstrates the reusable authentication structure
            provided by the USOFTECH React Base.
          </p>

          <p>
            Form validation, loading state, Enter-key submission, navigation,
            and login-state handling are already integrated.
          </p>

          <BlockTitle>How to Test</BlockTitle>

          <p>
            Submit the form with empty fields to test validation. For the demo
            login, enter any values such as
            <strong> 1 / 1 </strong> and click Login, or press
            <strong> Enter </strong> to submit.
          </p>

          <BlockTitle>Production</BlockTitle>

          <p>
            Replace the demo login handler with the project's actual
            authentication REST API. The API should validate the credentials and
            establish the authenticated user state before continuing to the
            application.
          </p>

          {/* Login form */}
        </Block>
      </div>
    </Page>
  );
}
