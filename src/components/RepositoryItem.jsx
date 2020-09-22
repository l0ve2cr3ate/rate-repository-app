import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";
import theme from "../theme";
import Stats from "./RepositoryList/Stats";
import Description from "./RepositoryList/Description";
import { Link } from "react-router-native";
import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.backgroundLight,
  },
  listHeader: {
    marginBottom: 10,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    borderRadius: 7,
  },
  btnContainer: {
    marginTop: 10,
  },
});

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stars,
  ratingAverage,
  reviewCount,
  avatar,
  url,
  detailView,
}) => {
  const openGithub = () => {
    Linking.openURL(url);
  };

  return (
    <Link to={`/repository/${id}`} component={TouchableOpacity}>
      <View style={[styles.container, detailView && styles.listHeader]}>
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
        {detailView && (
          <View style={styles.btnContainer}>
            <Button onPress={openGithub}>Open in GitHub</Button>
          </View>
        )}
      </View>
    </Link>
  );
};

export default RepositoryItem;
