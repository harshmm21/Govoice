import { Divider } from ".";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    direction: {
      options: ["horizontal"],
      control: { type: "select" },
    },
    size: {
      options: ["one-px", "two-px"],
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
    direction: "horizontal",
    size: "one-px",
    theme: "off",
    className: {},
  },
};
