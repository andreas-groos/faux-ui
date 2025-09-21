import type { FauxBoxProps } from "../types";
import {
  defaultColor,
  defaultColorWeight,
  defaultFauxStyle,
} from "../constants";
import { getColorForText } from "./utils";
import { getColorHex } from "./colors";

export const getFauxStyleCSS = ({
  fauxStyle = defaultFauxStyle,
  color = defaultColor,
  colorWeight = defaultColorWeight,
  autoColor = false,
  title = "",
}: Pick<
  FauxBoxProps,
  "color" | "colorWeight" | "fauxStyle" | "autoColor" | "title"
>) => {
  const actualColor = autoColor
    ? getColorForText(title ?? "", colorWeight)
    : getColorHex(color, colorWeight);

  if (fauxStyle === "striped") {
    return {
      background: `repeating-linear-gradient(45deg, white 0 10px, ${actualColor} 10px 12px)`,
    };
  }

  if (fauxStyle === "checkered") {
    const subtleColor = `${actualColor}50`;
    return {
      background: `
        linear-gradient(90deg, ${subtleColor} 50%, transparent 50%),
        linear-gradient(${subtleColor} 50%, transparent 50%)
      `
        .replace(/\s+/g, " ")
        .trim(),
      backgroundSize: "12px 12px",
      backgroundPosition: "0 0, 6px 6px",
      backgroundColor: "white",
    };
  }

  if (fauxStyle === "gradient") {
    // TODO: implement gradient
    return {};
  }
  return {};
};
