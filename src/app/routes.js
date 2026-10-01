import Startup from "../pages/Startup.jsx";
import Welcome from "../pages/Welcome.jsx";
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Settings from "../pages/Settings.jsx";
import Examples from "../pages/Examples.jsx";
import Readme from "../pages/docs/readme.jsx";
import Contribution from "../pages/docs/contribution.jsx";

import Storage from "../core/Storage";

const requireGuest = ({ resolve, router }) => {
  if (!Storage.getLoginState()) {
    resolve();

    return;
  }

  router.navigate("/dashboard/", {
    replaceState: true,
  });
};

const routes = [
  {
    path: "/",
    component: Startup,
  },

  {
    path: "/welcome/",
    component: Welcome,
    beforeEnter: requireGuest,
  },

  {
    path: "/login/",
    component: Login,
    beforeEnter: requireGuest,
  },

  {
    path: "/dashboard/",
    component: Dashboard,
  },

  {
    path: "/settings/",
    component: Settings,
  },

  {
    path: "/examples/",
    component: Examples,
  },

  {
    path: "/docs/readme/",
    component: Readme,
  },

  {
    path: "/docs/contribution/",
    component: Contribution,
  },
];

export default routes;
