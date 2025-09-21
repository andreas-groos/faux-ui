import { StoryFn, Meta } from "@storybook/react";
import { FauxBox } from "./FauxBox";
import { Story } from "storybook/internal/csf";

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
  displaySize: true,
};

export const FauxBoxWithChildren: StoryFn<typeof FauxBox> = () => (
  <div>
    <FauxBox title="some title" autoColor={true}>
      <div className="row" style={{ gap: "8px" }}>
        <FauxBox title="Child 1" color="blue" />
        <FauxBox title="Child 2" color="green" />
        <FauxBox title="Child 3" color="pink" />
        <FauxBox title="Child 3" color="amber" />
        <FauxBox title="Child 4" color="rose" />
      </div>
    </FauxBox>
  </div>
);
FauxBoxWithChildren.args = {
  title: "FauxBox With Children",
};
export const FauxBoxWithAutoColor: StoryFn<typeof FauxBox> = () => (
  <div>
    <div className="row">
      <FauxBox title="123" autoColor={true} />
      <FauxBox title="123" autoColor={true} colorWeight={100} />
      <FauxBox title="234" autoColor={true} />
      <FauxBox title="345" autoColor={true} />
      <FauxBox title="abc" autoColor={true} fauxStyle="checkered" />
    </div>
    <FauxBox title="abc" autoColor={true} fauxStyle="gradient" />
  </div>
);
FauxBoxWithAutoColor.args = {
  title: "FauxBox With Auto Color",
  autoColor: true,
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
