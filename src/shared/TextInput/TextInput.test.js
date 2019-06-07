import React from "react";
import { render, cleanup } from "@testing-library/react";
import TextInput from "./TextInput";

afterEach(cleanup);

it("should display an error message when passed an error", () => {
  // arrange
  const error = "Error message";

  // act
  const { debug, getByText } = render(
    <TextInput
      error={error}
      value=""
      name=""
      label=""
      id=""
      onChange={jest.fn()}
    />
  );

  // assert
  getByText(error);
});

it("should NOT display an error message when an error is NOT passed", () => {
  // arrange

  // act
  const { debug, queryByRole } = render(
    <TextInput value="" name="" label="" id="" onChange={jest.fn()} />
  );

  // assert
  expect(queryByRole("alert")).toBeNull();
});
