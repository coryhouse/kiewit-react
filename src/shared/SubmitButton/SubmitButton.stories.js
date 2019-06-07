import React from "react";
import { storiesOf } from "@storybook/react";
import SubmitButton from "./SubmitButton";

storiesOf("SubmitButton", module)
  .add("default", () => <SubmitButton label="Submit" />)
  .add("loading", () => <SubmitButton label="Submit" isLoading />);
