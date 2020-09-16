import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  textInputError: {
    padding: 10,
    borderColor: theme.colors.error,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
  },
  textInput: {
    padding: 10,
    borderColor: theme.colors.inputBorder,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    error ? styles.textInputError : styles.textInput,
    style,
  ];

  return <NativeTextInput style={textInputStyle} error={error} {...props} />;
};

export default TextInput;
