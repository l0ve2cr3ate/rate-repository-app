import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../Button";
import FormikTextInput from "../FormikTextInput";

const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: 15,
  },
});

const SignInForm = ({ onSubmit }) => (
  <View>
    <FormikTextInput name="username" placeholder="Username" />
    <View style={styles.textInputContainer}>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
    </View>
    <Button onPress={onSubmit}>Sign in</Button>
  </View>
);

export default SignInForm;
