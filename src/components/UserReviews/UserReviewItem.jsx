import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import theme from "../../theme";
import Button from "../Button";
import ReviewItem from "../SingleRepository/ReviewItem";

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    paddingBottom: 15,
  },
  outerBtn: {
    flex: 1,
    marginLeft: 15,
  },
  outerDeleteBtn: {
    marginRight: 15,
    backgroundColor: theme.colors.error,
  },
});

const UserReviewItem = ({ item, alert }) => (
  <>
    <ReviewItem
      repositoryName={item.node.repository.fullName}
      rating={item.node.rating}
      text={item.node.text}
      createdAt={item.node.createdAt}
      userReviews={true}
    />
    <View style={styles.btnContainer}>
      <Link
        component={Button}
        outerBtnStyle={styles.outerBtn}
        style={styles.btn}
        to={`/repository/${item.node.repository.id}`}
      >
        View Repository
      </Link>
      <Button
        outerBtnStyle={[styles.outerBtn, styles.outerDeleteBtn]}
        style={styles.btn}
        onPress={() => alert(item.node.id)}
      >
        Delete review
      </Button>
    </View>
  </>
);

export default UserReviewItem;
