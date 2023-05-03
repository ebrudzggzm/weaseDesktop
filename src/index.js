import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

//Flag-Icons
import "/node_modules/flag-icons/css/flag-icons.min.css";

//Import All Application Css
import "./styles/main.css";

//Import DatePicker Library
import "rsuite/dist/rsuite.css";

//MultiSelect CSS Library
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

//Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider value={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
