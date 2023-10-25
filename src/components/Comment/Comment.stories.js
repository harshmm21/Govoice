import { Comment } from ".";

export default {
  title: "Components/Comment",
  component: Comment,
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
    text: "Name",
    text1: "@username",
    text2: "Time",
    text3: "Product title",
    text4: "Comment goes here 😊",
    hasActions: true,
    avatarFaceClassName: {},
    avatarFace: "one",
    avatarCustomerClassName: {},
    dividerDirectionHorizontalClassName: {},
  },
};
