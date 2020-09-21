import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import * as Linking from "expo-linking";
import theme from "../../theme";
import Stats from "./Stats";
import Description from "./Description";
import { Link } from "react-router-native";
import Text from "../Text";

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
  btnContainer: {
    display: "flex",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
  githubBtn: {
    padding: 15,
    alignSelf: "center",
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
        {detailView && (
          <View style={styles.btnContainer}>
            <TouchableWithoutFeedback onPress={openGithub}>
              <Text
                color="textLight"
                fontWeight="bold"
                style={styles.githubBtn}
              >
                Open in GitHub
              </Text>
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    </Link>
  );
};

export default RepositoryItem;
