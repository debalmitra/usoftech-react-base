import { useState } from "react";

import {
  Page,
  BlockTitle,
  List,
  ListItem,
  ListInput,
  Radio,
  f7,
} from "framework7-react";

import PreferenceService from "../core/PreferenceService";
import AppNavbar from "../components/AppNavbar.jsx";
import AuthPage from "../components/AuthPage.jsx";

export default function Settings() {
  const [preferences, setPreferences] = useState(PreferenceService.get());

  const changeColorScheme = (value) => {
    const updated = PreferenceService.apply(f7, {
      colorScheme: value,
    });

    setPreferences(updated);
  };

  const handleRefresh = async (done) => {
    try {
      const updated = PreferenceService.get();

      setPreferences(updated);
    } finally {
      done();
    }
  };

  return (
    <AuthPage name="settings" ptr onPtrRefresh={handleRefresh}>
      <AppNavbar title="Settings" backLink />
      <div className="app-container">
        <BlockTitle>Appearance</BlockTitle>

        <List strongIos outlineIos dividersIos>
          <ListItem title="System">
            <Radio
              slot="after"
              name="colorScheme"
              value="system"
              checked={preferences.colorScheme === "system"}
              onChange={() => changeColorScheme("system")}
            />
          </ListItem>

          <ListItem title="Light">
            <Radio
              slot="after"
              name="colorScheme"
              value="light"
              checked={preferences.colorScheme === "light"}
              onChange={() => changeColorScheme("light")}
            />
          </ListItem>

          <ListItem title="Dark">
            <Radio
              slot="after"
              name="colorScheme"
              value="dark"
              checked={preferences.colorScheme === "dark"}
              onChange={() => changeColorScheme("dark")}
            />
          </ListItem>
        </List>

        <BlockTitle>Platform</BlockTitle>

        <List strongIos outlineIos dividersIos>
          <ListInput
            label="Platform"
            type="select"
            value={preferences.platform}
            onChange={(event) => {
              const platform = event.target.value;

              PreferenceService.set({
                platform,
              });

              window.location.reload();
            }}
          >
            <option value="system">System</option>

            <option value="ios">iOS</option>

            <option value="android">Android</option>
          </ListInput>
        </List>

        <BlockTitle>Page Transition</BlockTitle>

        <List strongIos outlineIos dividersIos>
          <ListInput
            label="Transition"
            type="select"
            value={preferences.pageTransition}
            onChange={(event) => {
              const pageTransition = event.target.value;

              const updated = PreferenceService.set({
                pageTransition,
              });

              setPreferences(updated);
            }}
          >
            <option value="default">Default</option>

            <option value="circle">Circle</option>

            <option value="cover">Cover</option>

            <option value="cover-v">Cover Vertical</option>

            <option value="dive">Dive</option>

            <option value="fade">Fade</option>

            <option value="flip">Flip</option>

            <option value="parallax">Parallax</option>

            <option value="push">Push</option>
          </ListInput>
        </List>

        <BlockTitle>Color Themes</BlockTitle>

        <List strongIos outlineIos dividersIos>
          <ListInput
            label="Color"
            type="select"
            value={preferences.color}
            onChange={(event) => {
              const color = event.target.value;

              const updated = PreferenceService.apply(f7, {
                color,
              });

              setPreferences(updated);
            }}
          >
            <option value="blue">Blue</option>

            <option value="red">Red</option>

            <option value="green">Green</option>

            <option value="pink">Pink</option>

            <option value="yellow">Yellow</option>

            <option value="orange">Orange</option>

            <option value="purple">Purple</option>

            <option value="deeppurple">Deep Purple</option>

            <option value="lightblue">Light Blue</option>

            <option value="teal">Teal</option>

            <option value="lime">Lime</option>

            <option value="deeporange">Deep Orange</option>
          </ListInput>
        </List>
      </div>
    </AuthPage>
  );
}
