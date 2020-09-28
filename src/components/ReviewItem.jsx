import React from "react";
import { StyleSheet, View } from "react-native";
import { format, parseISO } from "date-fns";
import theme from "../theme";
import BodyText from "./BodyText";
import Subheading from "./Subheading";

const width = 50;
const height = width;
const borderRadius = width / 2;

const styles = StyleSheet.create({
  reviewItemContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    backgroundColor: theme.colors.backgroundLight,
  },
  ratingCircle: {
    height,
    width,
    borderRadius,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  reviewItemDescription: {
    flexShrink: 1,
  },
  username: {
    lineHeight: 26,
  },
  date: {
    marginBottom: 5,
  },
});

const ReviewItem = ({
  username,
  rating,
  createdAt,
  text,
  userReviews,
  repositoryName,
}) => {
  return (
    <View style={styles.reviewItemContainer}>
      <View style={styles.ratingCircle}>
        <Subheading color="primary">{rating}</Subheading>
      </View>
      <View style={styles.reviewItemDescription}>
        {userReviews ? (
          <Subheading style={styles.username} color="textPrimary">
            {repositoryName}
          </Subheading>
        ) : (
          <Subheading style={styles.username} color="textPrimary">
            {username}
          </Subheading>
        )}

        <BodyText style={styles.date} color="textSecondary">
          {format(parseISO(createdAt), "dd.MM.yyyy")}
        </BodyText>
        <BodyText color="textPrimary">{text}</BodyText>
      </View>
    </View>
  );
};

export default ReviewItem;
