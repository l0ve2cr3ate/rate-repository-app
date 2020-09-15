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
    <StatsItem count={stars} title="Stars" />
    <StatsItem count={forksCount} title="Forks" />
    <StatsItem count={reviewCount} title="Reviews" />
    <StatsItem count={ratingAverage} title="Rating" />
  </View>
);

export default Stats;
