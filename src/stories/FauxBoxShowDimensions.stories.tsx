import { StoryFn, Meta } from "@storybook/react";
import { FauxBox } from "../components/FauxBox";
import { fauxBoxArgTypes } from "./shared-controls";
import { FauxBoxProps } from "../types";

export default {
  title: "Faux-UI/FauxBox `showDimensions` Props",
  component: FauxBox,
  argTypes: fauxBoxArgTypes,
} as Meta<typeof FauxBox>;

const Template: StoryFn<typeof FauxBox> = (args) => (
  <FauxBox showDimensions {...args} />
);
export const ShowDimensionsTrue = Template.bind({});
ShowDimensionsTrue.args = {
  title: "Box with dimensions displayed",
};

export const ShowDimensionsFalse = Template.bind({});
ShowDimensionsFalse.args = {
  showDimensions: false,
  title: "Box without dimensions displayed",
};

export const ResizableContainer = (args: FauxBoxProps) => {
  return (
    <div
      style={{
        resize: "both",
        overflow: "auto",
        border: "1px dashed #ccc",
        padding: "10px",
        minWidth: "200px",
        minHeight: "150px",
        width: "400px",
        height: "300px",
      }}
    >
      <FauxBox {...args} showDimensions />
    </div>
  );
};
ResizableContainer.args = {
  title: "Resize this container to see dimensions update",
};
