import type { FauxBoxProps } from "../types";
import React from "react";
import { useElementSize } from "../lib/hooks";
import { defaultColor, defaultColorWeight } from "../constants";
import { getFauxStyleCSS } from "../lib/css";
import { useFauxBox } from "./FauxProvider";

export function FauxBox(props: FauxBoxProps) {
  const providerValues = useFauxBox();
  const {
    title,
    color = defaultColor,
    colorWeight = defaultColorWeight,
    fauxStyle = "striped",
    style = {},
    showDimensions = false,
    autoColor = false,
    className = "",
    children,
  } = { ...providerValues, ...props };
  const fauxCSS = getFauxStyleCSS({
    color,
    fauxStyle,
    colorWeight,
    autoColor,
    title,
  });

  const { ref, width, height } = useElementSize({ watch: showDimensions });
  const hasChildren = React.Children.count(children) > 0;
  return (
    <div ref={ref} className={className} style={{ height: "100%" }}>
      <div style={{ position: "relative" }}>
        {showDimensions && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
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
      <div style={{ height: "100%", display: "flex" }}>
        <div
          style={{
            border: "1px solid black",
            padding: "4px",
            borderRadius: "8px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            width: "100%",
            ...fauxCSS,
            ...style,
          }}
        >
          {hasChildren && !title && children}
          {hasChildren && !!title && (
            <div style={{ position: "relative" }}>
              {children}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  ...titleWrapperStyle,
                }}
              >
                <p style={titleStyle}>{title}</p>
              </div>
            </div>
          )}
          {!hasChildren && !!title && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div style={titleWrapperStyle}>
                <p style={titleStyle}>{title}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const titleWrapperStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "4px",
  borderRadius: "4px",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  fontFamily: "monospace",
  margin: 0,
};
