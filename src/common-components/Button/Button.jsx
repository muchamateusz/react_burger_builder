import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.less";

const Button = ({
  className,
  type = "default",
  children,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames(
          "button", className,
          `button--${type}`,
          { 'button--disabled': disabled }
        )}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.any
};

export default Button;
