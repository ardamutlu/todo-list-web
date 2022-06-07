import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import axios from "axios";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import { setupAxios } from "@utils/helpers/interceptor.helper";

setupAxios(axios);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
