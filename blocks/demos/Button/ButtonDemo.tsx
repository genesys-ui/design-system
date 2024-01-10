import * as React from "react";

import { Button } from "@devo/coco";

export interface ButtonDemoProps {
  colorScheme?:
    | "accent"
    | "accent-high"
    | "blend-base"
    | "error"
    | "help"
    | "info"
    | "quiet"
    | "neutral"
    | "success"
    | "warning";
  size?: "sm" | "md" | "lg";
  state?:
    | "enabled"
    | "hovered"
    | "focused"
    | "pressed"
    | "expanded"
    | "selected"
    | "activated"
    | "disabled";
  isWide?: boolean;
}

export const ButtonDemo: React.FC<ButtonDemoProps> = ({
  colorScheme = "neutral",
  isWide,
  size = "md",
  state = "enabled",
}) => (
  <Button colorScheme={colorScheme} size={size} state={state} isWide={isWide}>
    React Button
  </Button>
);
