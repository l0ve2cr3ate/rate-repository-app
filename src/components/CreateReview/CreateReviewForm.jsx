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

const CreateReviewForm = ({ createReview }) => (
  <View>
    <FormikTextInput name="ownerName" placeholder="Repository owner name" />
    <View style={styles.textInputContainer}>
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
    </View>
    <View style={styles.textInputContainer}>
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
    </View>
    <View style={styles.textInputContainer}>
      <FormikTextInput name="text" placeholder="Review" multiline />
    </View>
    <View style={styles.btnContainer}>
      <Button onPress={createReview}>Create a Review</Button>
    </View>
  </View>
);

export default CreateReviewForm;
