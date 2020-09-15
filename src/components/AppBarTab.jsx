import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Subheading from "./Subheading";

const AppBarTab = ({ children }) => (
  <TouchableWithoutFeedback>
    <Subheading color="textLight">{children}</Subheading>
  </TouchableWithoutFeedback>
);

export default AppBarTab;
