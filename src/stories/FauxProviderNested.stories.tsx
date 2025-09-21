import { Meta } from "@storybook/react";
import { FauxBox, FauxProvider } from "../components";
import { fauxBoxArgTypes } from "./shared-controls";

export default {
  title: "Faux-UI/FauxProvider",
  component: FauxProvider,
  argTypes: fauxBoxArgTypes,
} as Meta<typeof FauxProvider>;

export const Nested = () => (
  <FauxProvider
    value={{
      title: "Parent Provider",
    }}
  >
    <div className="column">
      <FauxBox>
        <FauxProvider
          value={{
            title: "Child Provider",
            color: "purple",
            fauxStyle: "grid",
          }}
        >
          <div className="row" style={{ paddingTop: "80px" }}>
            <FauxBox />
            <FauxBox />
          </div>
        </FauxProvider>
      </FauxBox>
    </div>
  </FauxProvider>
);

Nested.args = {
  title: "FauxProvider Nested",
};
