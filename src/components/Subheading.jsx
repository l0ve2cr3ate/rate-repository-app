import React from "react";
import Text from "./Text";

const Subheading = ({ color, style, ...props }) => (
  <Text
    color={color}
    style={style}
    fontSize="subheading"
    fontWeight="bold"
    {...props}
  />
);

export default Subheading;
