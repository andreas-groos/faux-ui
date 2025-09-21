export type FauxBoxProps = {
  title?: string;
  color?: ColorName;
  colorWeight?: ColorWeight;
  displaySize?: boolean; // displays FauxBox width and height in px
  autoColor?: boolean; // set color based on `title` value, overrides provider value etc
  style?: React.CSSProperties;
};

export type ColorWeight =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type ColorName =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type ColorValue = {
  weight: ColorWeight;
  hex: string;
  rgb: string;
  hsl: string;
};

export type ColorFamily = {
  name: ColorName;
  colors: ColorValue[];
};
