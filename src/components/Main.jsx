import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "../components/AppBar";
import theme from "../theme";
import SignIn from "./SignIn";
import SingleRepository from "./SingleRepository";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";
import UserReviews from "./UserReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/repository/:id" exact>
          <SingleRepository />
        </Route>
        <Route path="/create-review" exact>
          <CreateReview />
        </Route>
        <Route path="/reviews" exact>
          <UserReviews />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
