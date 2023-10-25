import { MoreIcon } from ".";

export default {
  title: "Components/MoreIcon",
  component: MoreIcon,
  argTypes: {
    state: {
      options: ["default", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "default",
    className: {},
  },
};
