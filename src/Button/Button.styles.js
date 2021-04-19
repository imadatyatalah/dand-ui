import { styled } from "../../stitches.config";

export const StyledButton = styled("button", {
  backgroundColor: "transparent",
  cursor: "pointer",
  border: "none",
  display: "inline-block",
  border: "none",
  transition: "200ms ease-in-out",

  "&:focus": {
    outline: "none",
  },

  variants: {
    color: {
      primary: {
        color: "white",
        backgroundColor: "$primary600",

        "&:hover": {
          color: "$primary600",
          backgroundColor: "white",
          border: "1px solid $primary600",
        },

        "&:active": {
          backgroundColor: "#F8F9FA",
        },
      },
    },
    size: {
      large: {
        padding: "14px 44px",
        borderRadius: "5px",
        fontSize: "18px",
        fontWeight: "600",
      },
      medium: {
        padding: "12px 36px",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "600",
      },
      small: {
        padding: "10px 28px",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "600",
      },
    },
  },
});
