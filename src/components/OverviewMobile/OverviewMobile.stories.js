import { OverviewMobile } from ".";

export default {
  title: "Components/OverviewMobile",
  component: OverviewMobile,
  argTypes: {
    theme: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    tab: {
      options: ["customer", "income"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    theme: "off",
    tab: "customer",
    className: {},
    widgetTitleDropdownText: "All time",
    widgetTitleText: "Overview",
    overviewTabText: "Customers",
    overviewTabText1: "Income",
    text: "$2,000",
    text1: "$1,500",
    text2: "$1000",
    text3: "$500",
    text4: "$0",
    chartToolTipText: "Earning",
  },
};
