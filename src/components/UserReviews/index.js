import { useMutation, useQuery } from "@apollo/react-hooks";
import React from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { GET_AUTHORIZED_USER } from "../../graphql/queries";
import ItemSeparator from "../ItemSeparator";
import ReviewItem from "../SingleRepository/ReviewItem";
import Button from "../Button";
import theme from "../../theme";
import { Link } from "react-router-native";
import { DELETE_REVIEW } from "../../graphql/mutations";

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    paddingBottom: 15,
  },
  outerBtn: {
    flex: 1,
    marginLeft: 15,
  },
  outerDeleteBtn: {
    marginRight: 15,
    backgroundColor: theme.colors.error,
  },
});

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

  const renderItem = ({ item }) => (
    <>
      <ReviewItem
        repositoryName={item.node.repository.fullName}
        rating={item.node.rating}
        text={item.node.text}
        createdAt={item.node.createdAt}
        userReviews={true}
      />
      <View style={styles.btnContainer}>
        <Link
          component={Button}
          outerBtnStyle={styles.outerBtn}
          style={styles.btn}
          to={`/repository/${item.node.repository.id}`}
        >
          View Repository
        </Link>
        <Button
          outerBtnStyle={[styles.outerBtn, styles.outerDeleteBtn]}
          style={styles.btn}
          onPress={() => alert(item.node.id)}
        >
          Delete review
        </Button>
      </View>
    </>
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
