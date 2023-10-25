import { Widget } from ".";

export default {
  title: "Components/Widget",
  component: Widget,
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
    widgetTitleMoreIconStateHoverClassName: {},
    widgetTitleActionsClassName: {},
    widgetTitleVisible: true,
    widgetTitleBreakpoint: "fourteen-million-four-hundred-and-one-thousand-and-twenty-four",
    widgetTitleThemeOffBreakpointClassName: {},
    commentHasActions: true,
    commentHasDiv: true,
    commentText: "I need react version asap!",
    commentAvatarFaceClassName: {},
    commentDividerDirectionHorizontalClassName: {},
    commentVisible: true,
    commentText1: "How can I buy only the design?",
  },
};
