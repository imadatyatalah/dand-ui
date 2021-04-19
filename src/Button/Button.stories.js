import React from "react";

import { Button } from "./Button";

export default {
  title: "Dand-UI/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: "Button",
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Button",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  size: "small",
};
