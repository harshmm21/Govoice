import { ChartToolTip } from ".";

export default {
  title: "Components/ChartToolTip",
  component: ChartToolTip,
  argTypes: {
    theme: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    theme: "off",
    className: {},
    text: "24 September",
    frameClassName: {},
    text1: "20k",
  },
};
