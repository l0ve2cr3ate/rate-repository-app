import React from "react";
import { StyleSheet, View } from "react-native";
import BodyText from "../BodyText";
import Subheading from "../Subheading";

const styles = StyleSheet.create({
  statsItemContainer: {
    display: "flex",
    alignItems: "center",
  },
  subheading: {
    marginBottom: 5,
  },
});

const StatsItem = ({ count, title, testID }) => (
  <View style={styles.statsItemContainer}>
    <Subheading style={styles.subheading} color="textPrimary" testID={testID}>
      {count}
    </Subheading>
    <BodyText color="textSecondary">{title}</BodyText>
  </View>
);

export default StatsItem;
