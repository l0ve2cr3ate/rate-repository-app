import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { Alert, FlatList } from "react-native";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import { DELETE_REVIEW } from "../../graphql/mutations";
import ItemSeparator from "../ItemSeparator";
import UserReviewItem from "./UserReviewItem";
import useReviews from "../../hooks/useReviews";

const UserReviews = () => {
  const { reviews, fetchMore } = useReviews({
    includeReviews: true,
    first: 20,
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

  const onEndReach = () => {
    fetchMore();
  };

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
