import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./Button.styles";

/**
 * Button component
 */
export const Button = ({ label, color, size }) => {
  return (
    <>
      <StyledButton type="button" color={color} size={size}>
        {label}
      </StyledButton>
    </>
  );
};

Button.propTypes = {
  /**
   * Button content
   */
  label: PropTypes.string.isRequired,
  /**
   * Button color
   */
  color: PropTypes.string,
  /**
   * Button size
   */
  size: PropTypes.string,
};

Button.defaultProps = {
  color: "primary",
  size: "large",
};
