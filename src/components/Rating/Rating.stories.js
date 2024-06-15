import Rating from "./Rating";

export default {
  title: "Example/Rating",
  component: Rating,
  argTypes: {
    readOnly: { control: "boolean" },
    length: { control: "number" },
    value: { control: "number" },
    onRatingChange: { action: "rating changed" },
  },
};

export const Default = {
  readOnly: false,
  length: 5,
  value: 3,
};
