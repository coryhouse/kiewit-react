import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import TextInput from "./TextInput";

storiesOf("TextInput", module)
  .add("default", () => <TextInput label={text("Label", "Email")} />)
  .add("with preset value", () => (
    <TextInput
      label={text("Label", "Email")}
      value={text("Value", "Preset value")}
    />
  ))
  .add("with error", () => (
    <TextInput
      label={text("Label", "Email")}
      error={text("Error", "Its on fire")}
    />
  ));
