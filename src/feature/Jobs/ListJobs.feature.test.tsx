import React from "react";
import { Provider } from "react-redux";
import { cleanup, render, waitFor } from "@testing-library/react";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import ListJobs from "./ListJobs.feature";
import { initialState } from "../../store/store.mock";
import { actions } from "../../store/jobs/jobs";

describe("list jobs", () => {
  const mockStore = configureStore()(initialState);
  const renderApp = () =>
    render(
      <Provider store={mockStore}>
        <ListJobs />
      </Provider>
    );

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should call getJobs via useDispatch", () => {
    const getJobs = jest.spyOn(actions, "getJobs");
    renderApp();
    expect(getJobs).toHaveBeenCalledTimes(1);
  });

  it("should open modal via delete button", async () => {
    const { getByText, getByRole } = renderApp();
    const button = getByText(/Sil/i);
    await userEvent.click(button);
    expect(getByRole(/dialog/i)).toBeInTheDocument();
  });

  it("should call deleteJob via useDispatch", async () => {
    const deleteJob = jest.spyOn(actions, "deleteJob");
    const { getByText, getByRole } = renderApp();
    const deleteButton = getByText(/Sil/i);
    await userEvent.click(deleteButton);
    const approveButton = getByText(/Approve/i);
    await waitFor(() => expect(getByRole(/dialog/i)).toBeInTheDocument());
    await userEvent.click(approveButton);
    expect(deleteJob).toHaveBeenCalledTimes(1);
  });
});
