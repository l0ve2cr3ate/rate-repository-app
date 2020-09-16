import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  textInput: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style];

  return <NativeTextInput style={textInputStyle} error={error} {...props} />;
};

export default TextInput;
