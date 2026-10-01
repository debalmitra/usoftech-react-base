import { createRoot } from "react-dom/client";
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import "framework7/css/bundle";
import "./styles/app.css";
import "framework7-icons/css/framework7-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./app/App.jsx";
import Bootstrap from "./app/bootstrap.js";
Framework7.use(Framework7React);
const root = createRoot(document.getElementById("root"));
Bootstrap.start().then(() => {
  root.render(<App />);
});
