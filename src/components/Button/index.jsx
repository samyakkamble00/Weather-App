import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-lg" };
const variants = {
  fill: {
    gray_900: "bg-gray-900 text-white-A700",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900",
    gray_100: "bg-gray-100",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-[9px]", md: "p-3", lg: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "gray_900",
    "deep_purple_A200",
    "white_A700",
    "gray_100",
  ]),
};

export { Button };
