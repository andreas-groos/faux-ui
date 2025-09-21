import { StoryFn, Meta } from "@storybook/react";
import { FauxBox } from "../components/FauxBox";
import { fauxBoxArgTypes } from "./shared-controls";

export default {
  title: "Faux-UI/FauxBox Basic",
  component: FauxBox,
  argTypes: fauxBoxArgTypes,
} as Meta<typeof FauxBox>;

const Template: StoryFn<typeof FauxBox> = (args) => <FauxBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "FauxBox Default",
};
export const WithClass = Template.bind({});
WithClass.args = {
  title: "passing a class",
  className: "custom-class",
};

export const Multiples = () => (
  <div className="row">
    <FauxBox title="Box 1" color="red" />
    <FauxBox title="Box 2" color="blue" />
    <FauxBox title="Box 3" color="green" />
  </div>
);
Multiples.args = {
  title: "FauxBox",
};

export const FillsParent = () => (
  <div
    style={{
      width: "400px",
      height: "200px",
      border: "1px dashed #ccc",
      padding: "1px",
    }}
  >
    <FauxBox title="It fills the parent container" color="green" />
  </div>
);
FillsParent.args = {
  title: "FauxBox Fills Parent",
};

export const ColorFromText = () => (
  <FauxBox
    title="The color is assigned by the `title` and is stable"
    autoColor={true}
  />
);
