import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import SignInForm from "./SignInForm";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 15,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const SignInContainer = ({ onSubmit, validationSchema }) => (
  <View style={styles.formContainer}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  </View>
);

export default SignInContainer;
