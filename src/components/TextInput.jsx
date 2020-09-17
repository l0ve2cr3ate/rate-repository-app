import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderColor: theme.colors.inputBorder,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
  },
  textInputError: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.textInput,
    error && styles.textInputError,
    style,
  ];

  return <NativeTextInput style={textInputStyle} error={error} {...props} />;
};

export default TextInput;
