import { styled } from "../../stitches.config";

export const StyledButton = styled("button", {
  backgroundColor: "transparent",
  cursor: "pointer",
  border: "none",
  display: "inline-block",
  border: "none",
  transitionDuration: "200ms",

  "&:focus": {
    outline: "none",
  },

  variants: {
    color: {
      primary: {
        color: "white",
        backgroundColor: "#49A47A",

        "&:hover": {
          color: "#49A47A",
          backgroundColor: "white",
          border: "1px solid #49A47A",
        },

        "&:active": {
          backgroundColor: "#F8F9FA",
        },
      },
    },
    size: {
      large: {
        padding: "11.5px 42px",
        borderRadius: "5px",
        fontSize: "18px",
        fontWeight: "600",
      },
      small: {
        padding: "9px 32px",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "600",
      },
    },
  },
});
