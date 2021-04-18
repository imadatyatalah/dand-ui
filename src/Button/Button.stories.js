import React from "react";

import { Button } from "./Button";

export default {
  title: "Dand-UI/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  size: "small",
};
