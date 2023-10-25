import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    style: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
    icon: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    position: {
      options: ["off", "right", "left"],
      control: { type: "select" },
    },
    state: {
      options: ["deactive", "default"],
      control: { type: "select" },
    },
    theme: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "primary",
    size: "medium",
    icon: "off",
    position: "off",
    state: "deactive",
    theme: "off",
    className: {},
    divClassName: {},
    text: "Button",
  },
};
