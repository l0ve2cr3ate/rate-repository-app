import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../Button";
import FormikTextInput from "../FormikTextInput";

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 15,
  },
  btnContainer: {
    marginTop: 15,
  },
});

const SignUpForm = ({ onSubmit }) => (
  <View>
    <FormikTextInput name="username" placeholder="Username" />
    <View style={styles.textInputContainer}>
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
    </View>
    <View style={styles.textInputContainer}>
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
      />
    </View>
    <View style={styles.btnContainer}>
      <Button onPress={onSubmit}>Sign up</Button>
    </View>
  </View>
);

export default SignUpForm;
