import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const formatNumbers = (num) => {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
};

const renderItem = ({ item }) => (
  <RepositoryItem
    fullName={item.fullName}
    description={item.description}
    language={item.language}
    forksCount={formatNumbers(item.forksCount)}
    stars={formatNumbers(item.stargazersCount)}
    ratingAverage={formatNumbers(item.ratingAverage)}
    reviewCount={formatNumbers(item.reviewCount)}
    avatar={item.ownerAvatarUrl}
  />
);

const RepositoryList = () => {
  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
