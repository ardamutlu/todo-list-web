import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "./App";

test("app test", () => {
  const mockStore = configureStore()({
    jobs: [],
    priorities: {
      entity: [],
      loading: false,
      error: null,
    },
  });

  /*render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );*/
});
