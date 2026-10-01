import { Navbar, NavLeft, NavTitle, Link } from "framework7-react";
import NavigationService from "../core/NavigationService";

import ConfigManager from "../core/ConfigManager";

export default function AppNavbar({ title = null, backLink = false }) {
  const applicationName = ConfigManager.getValue(
    "application",
    "name",
    "Application",
  );

  return (
    <Navbar>
      {backLink && (
        <NavLeft>
          <Link
            iconF7="arrow_left"
            onClick={(event) => {
              event.preventDefault();
              NavigationService.back();
            }}
          />
        </NavLeft>
      )}

      {!backLink && (
        <NavLeft>
          <Link iconF7="bars" panelOpen="left" />
        </NavLeft>
      )}

      <NavTitle>{title || applicationName}</NavTitle>
    </Navbar>
  );
}
