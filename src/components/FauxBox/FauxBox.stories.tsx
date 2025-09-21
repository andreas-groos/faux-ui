import { StoryFn, Meta } from "@storybook/react";
import { FauxBox } from "./";

export default {
  title: "Faux-UI/FauxBox",
  component: FauxBox,
} as Meta<typeof FauxBox>;

const Template: StoryFn<typeof FauxBox> = (args) => <FauxBox {...args} />;

export const FauxBoxFull = Template.bind({});
FauxBoxFull.args = {
  title: "FauxBox Full",
  color: "red",
  colorWeight: 300,
};

export const ThreeBoxesInFlex: StoryFn<typeof FauxBox> = () => (
  <div
    style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
  >
    <div style={{ flex: 1 }}>
      <FauxBox title="Left Box" color="blue" colorWeight={100} />
    </div>
    <div style={{ flex: 1 }}>
      <FauxBox title="Center Box" color="green" />
    </div>
    <div style={{ flex: 1 }}>
      <FauxBox title="Right Box" color="pink" />
    </div>
  </div>
);
