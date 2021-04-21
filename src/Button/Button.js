import React from "react";
// import PropTypes from "prop-types";

import { StyledButton } from "./Button.styles";

/**
 * Button component
 */
export const Button = ({ children, color, size }) => {
  return (
    <>
      <StyledButton type="button" color={color} size={size}>
        {children}
      </StyledButton>
    </>
  );
};

// Button.propTypes = {
//   /**
//    * Button content
//    */
//   children: PropTypes.string.isRequired,
//   /**
//    * Button color
//    */
//   color: PropTypes.string,
//   /**
//    * Button size
//    */
//   size: PropTypes.oneOf(["large", "medium", "small"]),
// };

// Button.defaultProps = {
//   color: "primary",
//   size: "medium",
// };
