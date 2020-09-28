import { useMutation, useQuery } from "@apollo/react-hooks";
import React from "react";
import { Alert, FlatList } from "react-native";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import { DELETE_REVIEW } from "../../graphql/mutations";
import ItemSeparator from "../ItemSeparator";
import UserReviewItem from "./UserReviewItem";

const UserReviews = () => {
  const { data, loading, fetchMore } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews: true,
      first: 20,
    },
  });

  const [deleteReview] = useMutation(DELETE_REVIEW);

  const alert = (id) =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "CANCEL",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "DELETE",
          onPress: () =>
            deleteReview({
              variables: { id },
              refetchQueries: [
                {
                  query: GET_AUTHORIZED_USER,
                  variables: {
                    includeReviews: true,
                    first: 20,
                  },
                },
              ],
            }),
        },
      ],
      { cancelable: false }
    );

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

  const renderItem = ({ item }) => <UserReviewItem item={item} alert={alert} />;

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
