import React from "react";
import { StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import SignInBtn from "./SignInBtn";

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
    <SignInBtn onSubmit={onSubmit} />
  </View>
);

export default SignInForm;
