import { OverviewTab } from ".";

export default {
  title: "Components/OverviewTab",
  component: OverviewTab,
  argTypes: {
    state: {
      options: ["active", "default"],
      control: { type: "select" },
    },
    theme: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    device: {
      options: ["desktop", "tablet", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "active",
    theme: "off",
    device: "desktop",
    className: {},
    text: "Income",
    text1: "256k",
    componentUpDown: "off",
    text2: "Customers",
    text3: "1024",
    componentUpDownOnClassName: {},
  },
};
