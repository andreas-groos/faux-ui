import type { FauxBoxProps } from "../types";
import { useElementSize } from "../lib/hooks";
import { defaultColor, defaultColorWeight } from "../constants";
import { getFauxStyleCSS } from "../lib/css";

export function FauxBox({
  title,
  color = defaultColor,
  colorWeight = defaultColorWeight,
  fauxStyle = "striped",
  style = {},
  displaySize = false,
  autoColor = false,
}: FauxBoxProps) {
  const fauxCSS = getFauxStyleCSS({
    color,
    fauxStyle,
    colorWeight,
    autoColor,
    title: title || "",
  });

  const { ref, width, height } = useElementSize({ watch: displaySize });
  return (
    <div ref={ref}>
      <div style={{ position: "relative" }}>
        {displaySize && (
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              fontSize: "8px",
              padding: "2px 4px",
              borderTopRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <p style={{ fontFamily: "monospace" }}>
              {width} x {height}
            </p>
          </div>
        )}
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...fauxCSS,
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
    </div>
  );
}
