import { useEffect } from "react";

import { Page, Preloader } from "framework7-react";

import NavigationService from "../core/NavigationService";
import Storage from "../core/Storage";

export default function Startup() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Startup is only allowed to redirect
      // when the current browser URL is "/".

      if (window.location.pathname !== "/") {
        return;
      }

      if (Storage.getLoginState()) {
        NavigationService.navigate("/dashboard/", {
          replaceState: true,
        });
      } else {
        NavigationService.navigate("/welcome/", {
          replaceState: true,
        });
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Page name="startup">
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
