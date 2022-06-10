import React from "react";
import { Provider } from "react-redux";
import { cleanup, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import Form from "./Form";
import { actions as getPrioritiesActions } from "../../store/priorities/get.priorities";
import { actions as jobsActions } from "../../store/jobs/jobs";
import { initialState } from "../../store/store.mock";

describe("form tests", () => {
  const mockStore = configureStore()(initialState);
  const renderApp = () =>
    render(
      <Provider store={mockStore}>
        <Form />
      </Provider>
    );

  afterEach(cleanup);

  it("should call getPrioritiesRequest via useDispatch", () => {
    const getPriorities = jest.spyOn(
      getPrioritiesActions,
      "getPrioritiesRequest"
    );
    renderApp();
    expect(getPriorities).toBeCalled();
  });

  it("should call getPrioritiesReset via useDispatch", () => {
    const getPrioritiesReset = jest.spyOn(
      getPrioritiesActions,
      "getPrioritiesReset"
    );
    const { unmount } = renderApp();
    unmount();
    expect(getPrioritiesReset).toBeCalled();
  });

  it("Job Name and Job Priority field should not send", async () => {
    const { getByText, getByRole, getByLabelText } = renderApp();
    const inputBox = getByRole("textbox", { name: /name/i });

    await userEvent.clear(inputBox);
    fireEvent.change(getByRole("combobox"), { target: { value: "" } });
    await userEvent.click(getByText(/Create/i));

    expect(getByLabelText("form.name")).toBeInTheDocument();
    expect(getByLabelText("form.priority")).toBeInTheDocument();
  });

  it("form should submit", async () => {
    const createJob = jest.spyOn(jobsActions, "createJob");
    const { getByText, getByRole } = renderApp();
    const inputBox = getByRole("textbox", { name: /name/i });

    await userEvent.type(inputBox, "Test 1");
    fireEvent.change(getByRole("combobox"), { target: { value: "Urgent" } });

    await userEvent.click(getByText(/Create/i));
    expect(createJob).toBeCalled();
  });
});
