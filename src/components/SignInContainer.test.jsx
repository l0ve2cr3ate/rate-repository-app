import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignInContainer from "./SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <SignInContainer onSubmit={onSubmit} />
      );

      const username = getByPlaceholderText("Username");
      const password = getByPlaceholderText("Password");
      fireEvent.changeText(username, "kalle");
      fireEvent.changeText(password, "password");
      fireEvent.press(getByText("Sign in"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
