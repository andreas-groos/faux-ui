import { StoryFn, Meta } from "@storybook/react";
import { FauxBox } from "../components/FauxBox";
import { fauxBoxArgTypes } from "./shared-controls";

export default {
  title: "Faux-UI/FauxBox Color Props",
  component: FauxBox,
  argTypes: fauxBoxArgTypes,
} as Meta<typeof FauxBox>;

const Template: StoryFn<typeof FauxBox> = (args) => <FauxBox {...args} />;

export const ColorDefault = Template.bind({});
ColorDefault.args = {
  title: "FauxBox defaults to red",
};

export const Colors = () => (
  <div className="row">
    <div className="column">
      <FauxBox title="Color Red" color="red" />
      <FauxBox title="Color Blue" color="blue" />
      <FauxBox title="Color Green" color="green" />
      <FauxBox title="Color Yellow" color="yellow" />
      <FauxBox title="Color Purple" color="purple" />
      <FauxBox title="Color Pink" color="pink" />
      <FauxBox title="Color Orange" color="orange" />
      <FauxBox title="Color Teal" color="teal" />
    </div>
    <div className="column">
      <FauxBox title="Color Cyan" color="cyan" />
      <FauxBox title="Color Indigo" color="indigo" />
      <FauxBox title="Color Violet" color="violet" />
      <FauxBox title="Color Amber" color="amber" />
      <FauxBox title="Color Lime" color="lime" />
      <FauxBox title="Color Emerald" color="emerald" />
      <FauxBox title="Color Gray" color="gray" />
      <FauxBox title="Color Slate" color="slate" />
    </div>
  </div>
);
Colors.args = {
  title: "All the colors",
};

export const ColorWeights = () => (
  <div className="row">
    <div className="column">
      <FauxBox title="Color Red Weight 50" color="red" colorWeight={50} />
      <FauxBox title="Color Red Weight 100" color="red" colorWeight={100} />
      <FauxBox title="Color Red Weight 200" color="red" colorWeight={200} />
      <FauxBox title="Color Red Weight 300" color="red" colorWeight={300} />
      <FauxBox title="Color Red Weight 400" color="red" colorWeight={400} />
      <FauxBox title="Color Red Weight 500" color="red" colorWeight={500} />
      <FauxBox title="Color Red Weight 600" color="red" colorWeight={600} />
      <FauxBox title="Color Red Weight 700" color="red" colorWeight={700} />
      <FauxBox title="Color Red Weight 800" color="red" colorWeight={800} />
      <FauxBox title="Color Red Weight 900" color="red" colorWeight={900} />
      <FauxBox title="Color Red Weight 950" color="red" colorWeight={950} />
    </div>
    <div className="column">
      <FauxBox title="Color Blue Weight 50" color="blue" colorWeight={50} />
      <FauxBox title="Color Blue Weight 100" color="blue" colorWeight={100} />
      <FauxBox title="Color Blue Weight 200" color="blue" colorWeight={200} />
      <FauxBox title="Color Blue Weight 300" color="blue" colorWeight={300} />
      <FauxBox title="Color Blue Weight 400" color="blue" colorWeight={400} />
      <FauxBox title="Color Blue Weight 500" color="blue" colorWeight={500} />
      <FauxBox title="Color Blue Weight 600" color="blue" colorWeight={600} />
      <FauxBox title="Color Blue Weight 700" color="blue" colorWeight={700} />
      <FauxBox title="Color Blue Weight 800" color="blue" colorWeight={800} />
      <FauxBox title="Color Blue Weight 900" color="blue" colorWeight={900} />
      <FauxBox title="Color Blue Weight 950" color="blue" colorWeight={950} />
    </div>
  </div>
);
