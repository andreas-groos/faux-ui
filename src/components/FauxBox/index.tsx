import React from "react";
import { ColorName, ColorWeight, getColorHex } from "../../colors";

export type FauxBoxProps = {
  title?: string;
  color?: ColorName;
  colorWeight?: ColorWeight;
  style?: React.CSSProperties;
};

export function FauxBox({
  title,
  color = "red",
  colorWeight = 500,
  style = {},
}: FauxBoxProps) {
  const stripePattern = `repeating-linear-gradient(45deg, white 0 10px, ${getColorHex(
    color,
    colorWeight
  )} 10px 12px)`;

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        background: stripePattern,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingTop: "2px",
          paddingBottom: "2px",
          borderRadius: "4px",
          border: "1px solid transparent",
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: "monospace" }}>
          {title || "FauxBox Component"}
        </p>
      </div>
    </div>
  );
}
