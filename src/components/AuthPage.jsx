import { useEffect, useState } from "react";

import { Page, Preloader } from "framework7-react";

import Storage from "../core/Storage";
import NavigationService from "../core/NavigationService";

export default function AuthPage({ name, children }) {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (!Storage.getLoginState()) {
      NavigationService.navigate("/login/", {
        replaceState: true,
      });

      return;
    }

    setVerified(true);
  }, []);

  if (!verified) {
    return (
      <Page name={name}>
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

  return <Page name={name}>{children}</Page>;
}
