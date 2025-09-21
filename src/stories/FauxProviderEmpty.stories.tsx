import { Meta } from "@storybook/react";
import { FauxBox, FauxProvider } from "../components";
import { fauxBoxArgTypes } from "./shared-controls";

export default {
  title: "Faux-UI/FauxProvider",
  component: FauxProvider,
  argTypes: fauxBoxArgTypes,
} as Meta<typeof FauxProvider>;

export const Empty = () => (
  <FauxProvider value={{}}>
    <div className="column">
      <FauxBox />
      <FauxBox title="empty provider value defaults to default values" />
    </div>
  </FauxProvider>
);

Empty.args = {
  title: "FauxProvider No Values Set",
};
