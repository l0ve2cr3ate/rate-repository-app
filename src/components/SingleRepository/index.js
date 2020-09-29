import React from "react";
import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import ItemSeparator from "../ItemSeparator";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "../ReviewItem";
import useRepository from "../../hooks/useRepository";

const SingleRepository = () => {
  const { id } = useParams();

  const { repository, reviews, fetchMore } = useRepository({
    first: 20,
    id,
  });

  const onEndReach = () => {
    fetchMore();
  };

  const renderItem = ({ item }) => (
    <ReviewItem
      username={item.node.user.username}
      rating={item.node.rating}
      text={item.node.text}
      createdAt={item.node.createdAt}
    />
  );

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ node: { id } }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
