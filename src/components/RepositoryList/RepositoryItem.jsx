import React from "react";
import { View, Image, StyleSheet } from "react-native";
import theme from "../../theme";
import Stats from "./Stats";
import Description from "./Description";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.backgroundLight,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    borderRadius: 7,
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stars,
  ratingAverage,
  reviewCount,
  avatar,
}) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Image
        style={styles.image}
        source={{ uri: avatar, width: 50, height: 50 }}
      />
      <Description
        fullName={fullName}
        description={description}
        language={language}
      />
    </View>
    <Stats
      stars={stars}
      forksCount={forksCount}
      reviewCount={reviewCount}
      ratingAverage={ratingAverage}
    />
  </View>
);

export default RepositoryItem;
