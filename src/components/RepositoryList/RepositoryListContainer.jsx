import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RepositoryItem from "../RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  listHeader: {
    zIndex: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const formatNumbers = (num) => {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
};

const renderItem = ({ item }) => (
  <RepositoryItem
    id={item.id}
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

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { searchQuery, onChangeSearch, onPress, sort } = this.props;

    return (
      <RepositoryListHeader
        searchQuery={searchQuery}
        onChangeSearch={onChangeSearch}
        onPress={onPress}
        sort={sort}
      />
    );
  };

  render() {
    const { repositories, onEndReach } = this.props;
    const repositoryNodes = repositories
      ? repositories?.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        ListHeaderComponentStyle={styles.listHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;
