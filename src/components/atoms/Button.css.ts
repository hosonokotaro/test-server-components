import { style } from "@vanilla-extract/css";

export const base = style({
  padding: "8px 12px",
  border: "1px solid #111",
  background: "#eee",
  color: "#111",
  appearance: "none",
  cursor: "pointer",
  transition: "background 0.3s ease, color 0.3s ease",

  ":hover": {
    background: "#111",
    color: "#eee",
  },

  ":disabled": {
    borderColor: "transparent",
    background: "#f33",
    color: "#eee",
    cursor: "default",
  },
});
