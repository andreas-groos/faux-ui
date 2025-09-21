import { StoryFn, Meta } from "@storybook/react";
import { FauxBox } from "./";

export default {
  title: "Faux-UI/FauxBox",
  component: FauxBox,
} as Meta<typeof FauxBox>;

const Template: StoryFn<typeof FauxBox> = (args) => <FauxBox {...args} />;

export const FauxBoxSimple = Template.bind({});
FauxBoxSimple.args = {
  title: "FauxBox Simple",
  color: "red",
  colorWeight: 300,
};

export const FauxBoxWithSize = Template.bind({});
FauxBoxWithSize.args = {
  title: "FauxBox With Size",
  color: "red",
  colorWeight: 300,
  showSize: true,
};
export const ThreeBoxesInFlex: StoryFn<typeof FauxBox> = () => (
  <div
    style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
  >
    <div style={{ flex: 1 }}>
      <FauxBox
        title="Left Box"
        color="blue"
        colorWeight={100}
        style={{
          border: "2px dashed blue",
          height: "50vh",
        }}
      />
    </div>
    <div style={{ flex: 1 }}>
      <FauxBox title="Center Box" color="green" />
    </div>
    <div style={{ flex: 1 }}>
      <FauxBox title="Right Box" color="pink" />
    </div>
  </div>
);
