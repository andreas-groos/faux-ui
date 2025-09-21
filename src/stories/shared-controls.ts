import { ArgTypes } from "@storybook/react";
import { FauxBoxProps } from "../types";

/**
 * Shared argTypes configuration for all FauxBox stories
 * This ensures consistent controls across all story files
 */
export const fauxBoxArgTypes: ArgTypes<FauxBoxProps> = {
  title: {
    control: "text",
    description: "Main text displayed in the center of the FauxBox",
  },
  fauxStyle: {
    control: {
      type: "select",
    },
    options: ["striped", "checkered", "gradient"],
    description: "The decoration style for the FauxBox",
  },
  color: {
    control: {
      type: "select",
    },
    options: [
      "slate",
      "gray",
      "zinc",
      "neutral",
      "stone",
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ],
    description: "Color name for the striped pattern background",
  },
  colorWeight: {
    control: {
      type: "select",
    },
    options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    description: "Color weight/intensity for the stripes (50-950)",
  },
  showDimensions: {
    control: "boolean",
    description: "Display the FauxBox's current width and height in pixels",
  },
  autoColor: {
    control: "boolean",
    description: "Automatically assigns a color based on the title prop value",
  },
  className: {
    control: "text",
    description: "CSS classes that get passed through to the FauxBox",
  },
  style: {
    control: "object",
    description: "Additional CSS styles to apply to the FauxBox container",
  },
};
