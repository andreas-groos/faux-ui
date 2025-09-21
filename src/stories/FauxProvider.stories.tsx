import { Meta } from "@storybook/react";
import { FauxBox, FauxProvider } from "../components";
import { fauxBoxArgTypes } from "./shared-controls";

export default {
  title: "Faux-UI/FauxProvider",
  component: FauxProvider,
  argTypes: fauxBoxArgTypes,
} as Meta<typeof FauxProvider>;

export const Default = () => (
  <FauxProvider
    value={{
      color: "teal",
      colorWeight: 700,
      showDimensions: true,
      fauxStyle: "gradient",
      title: "Default title from the provider",
    }}
  >
    <div className="column">
      <FauxBox title="All components inside the provider" />
      <FauxBox title="inherit the provider values" />
      <FauxBox
        title="unless you set the props on the component level"
        color="red"
        showDimensions={false}
      />
      <FauxBox />
    </div>
  </FauxProvider>
);

Default.args = {
  title: "FauxProvider Default",
};
