import { StoryFn, Meta } from "@storybook/react";
import { FauxBox } from "./";

export default {
  title: "Faux-UI/FauxBox",
  component: FauxBox,
} as Meta<typeof FauxBox>;

const Template: StoryFn<typeof FauxBox> = (args) => <FauxBox {...args} />;

export const FauxBox1 = Template.bind({});
FauxBox1.args = {
  title: "FauxBox 1",
};

export const FauxBox2 = Template.bind({});
FauxBox2.args = {
  title: "FauxBox 2",
};
