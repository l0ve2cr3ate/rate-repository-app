import React from "react";
import Text from "./Text";

const BodyText = ({ color, style, ...props }) => (
  <Text
    color={color}
    fontSize="body"
    fontWeight="normal"
    style={style}
    {...props}
  />
);

export default BodyText;
