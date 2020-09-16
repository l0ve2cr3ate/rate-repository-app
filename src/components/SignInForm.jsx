import React from "react";
import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import SignInBtn from "./SignInBtn";

const SignInForm = ({ onSubmit }) => (
  <View>
    <FormikTextInput name="username" placeholder="Username" />
    <FormikTextInput name="password" placeholder="Password" secureTextEntry />
    <SignInBtn onSubmit={onSubmit} />
  </View>
);

export default SignInForm;
