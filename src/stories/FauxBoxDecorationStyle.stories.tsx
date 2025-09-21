import { StoryFn, Meta } from "@storybook/react";
import { FauxBox } from "../components/FauxBox";
import { fauxBoxArgTypes } from "./shared-controls";

export default {
  title: "Faux-UI/FauxBox Decoration Styles",
  component: FauxBox,
  argTypes: fauxBoxArgTypes,
} as Meta<typeof FauxBox>;

const Template: StoryFn<typeof FauxBox> = (args) => <FauxBox {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  title: "Interactive FauxBox",
  fauxStyle: "striped",
  color: "blue",
  colorWeight: 500,
  showDimensions: false,
  autoColor: false,
};

export const Striped = Template.bind({});
Striped.args = {
  title: "Striped Style (Default)",
  fauxStyle: "striped",
  color: "blue",
};

export const Checkered = Template.bind({});
Checkered.args = {
  title: "Checkered Style",
  fauxStyle: "checkered",
  color: "green",
};

export const Gradient = Template.bind({});
Gradient.args = {
  title: "Gradient Style",
  fauxStyle: "gradient",
  color: "purple",
};

export const Grid = Template.bind({});
Grid.args = {
  title: "Gradient Style",
  fauxStyle: "grid",
  color: "teal",
};
