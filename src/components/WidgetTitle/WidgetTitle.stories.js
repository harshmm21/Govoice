import { WidgetTitle } from ".";

export default {
  title: "Components/WidgetTitle",
  component: WidgetTitle,
  argTypes: {
    theme: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    breakpoint: {
      options: ["fourteen-million-four-hundred-and-one-thousand-and-twenty-four", "three-hundred-and-seventy-five"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    theme: "off",
    breakpoint: "fourteen-million-four-hundred-and-one-thousand-and-twenty-four",
    className: {},
    text: "Overview",
    dropdownText: "All time",
    visible: true,
    tagClassName: {},
    actionsClassName: {},
    visible1: true,
    moreIconStateHoverClassName: {},
  },
};
