import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import theme from "../theme";
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

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
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
};

export default SignIn;
