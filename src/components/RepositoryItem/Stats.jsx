import React from "react";
import { StyleSheet, View } from "react-native";
import StatsItem from "./StatsItem";

const styles = StyleSheet.create({
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
    paddingBottom: 10,
  },
});

const Stats = ({ stars, forksCount, reviewCount, ratingAverage }) => (
  <View style={styles.statsContainer}>
    <StatsItem count={stars} title="Stars" testID="stargazer-count" />
    <StatsItem count={forksCount} title="Forks" testID="forks-count" />
    <StatsItem count={reviewCount} title="Reviews" testID="review-count" />
    <StatsItem count={ratingAverage} title="Rating" testID="rating" />
  </View>
);

export default Stats;
