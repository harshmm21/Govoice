import { Dropdown } from ".";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    size: {
      options: ["small"],
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
    size: "small",
    theme: "off",
    className: {},
    text: "All time",
  },
};
