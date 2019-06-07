import { configure, addDecorator } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withKnobs } from "@storybook/addon-knobs";

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Globally enable knobs
addDecorator(withKnobs);

configure(loadStories, module);
