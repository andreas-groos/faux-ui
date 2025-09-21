import { PropsWithChildren } from "react";

/**
 * Props for the FauxBox component - a decorative box with striped patterns
 * and customizable colors for UI prototyping and layout visualization.
 */
export type FauxBoxProps = PropsWithChildren<{
  /** Main text displayed in the center of the FauxBox component */
  title?: string;
  /**
   * Color name for the striped pattern background.
   * Choose from predefined color palette (red, blue, green, etc.)
   */
  color?: ColorName;
  /**
   * Color weight/intensity for the stripes (50-950).
   * Higher numbers = darker colors, lower numbers = lighter colors.
   * @default 500
   */
  colorWeight?: ColorWeight;
  /**
   * When true, displays the FauxBox's current width and height
   * in pixels in the top right corner of the component.
   */
  showDimensions?: boolean;
  /**
   * When true, automatically assigns a color based on the `title` prop value.
   * This overrides any manually specified `color` value.
   */
  autoColor?: boolean;
  /**
   * striped, checkered or gradient style
   */
  fauxStyle?: FauxDecoratorStyle;
  /**
   * CSS classes that get passed through to the `<FauxBox>`
   */
  className?: string;
  /**
   * Additional CSS styles to apply to the FauxBox container.
   * These styles will be merged with the default component styles.
   */
  style?: React.CSSProperties;
}>;

export type FauxDecoratorStyle = "striped" | "checkered" | "gradient";

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
