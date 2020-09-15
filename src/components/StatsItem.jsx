import React from "react";
import { StyleSheet, View } from "react-native";
import BodyText from "./BodyText";
import Subheading from "./Subheading";

const styles = StyleSheet.create({
  statsItemContainer: {
    display: "flex",
    alignItems: "center",
  },
});

const StatsItem = ({ count, title }) => (
  <View style={styles.statsItemContainer}>
    <Subheading color="textPrimary">{count}</Subheading>
    <BodyText color="textSecondary">{title}</BodyText>
  </View>
);

export default StatsItem;
