import { ColorWeight, getColorHex, getColorNames } from "./colors";

export const getColorForText = (text: string, weight: ColorWeight) => {
  const colorIndex =
    text
      .split("")
      .map((_, i) => text.charCodeAt(i))
      .reduce((sum, charCode) => sum + charCode, 0) % getColorNames().length;
  return getColorHex(getColorNames()[colorIndex], weight);
};
