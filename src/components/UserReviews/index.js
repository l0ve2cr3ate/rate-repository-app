import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { FlatList } from "react-native";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import ItemSeparator from "../ItemSeparator";
import ReviewItem from "../SingleRepository/ReviewItem";

const UserReviews = () => {
  const { data, loading, fetchMore } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews: true,
      first: 20,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_AUTHORIZED_USER,
      variables: {
        includeReviews: true,
        after: data.authorizedUser.reviews.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          authorizedUser: {
            ...fetchMoreResult.authorizedUser,
            reviews: {
              ...fetchMoreResult.authorizedUser.reviews,
              edges: [
                ...previousResult.authorizedUser.reviews.edges,
                ...fetchMoreResult.authorizedUser.reviews.edges,
              ],
            },
          },
        };
        return nextResult;
      },
    });
  };

  const onEndReach = () => {
    handleFetchMore();
  };

  const reviews = data?.authorizedUser.reviews.edges;

  const renderItem = ({ item }) => (
    <ReviewItem
      repositoryName={item.node.repository.fullName}
      rating={item.node.rating}
      text={item.node.text}
      createdAt={item.node.createdAt}
      userReviews={true}
    />
  );

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ node: { id } }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};
export default UserReviews;
