import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import { AUTHORIZED_USER } from "../graphql/queries";
import AuthStorageContext from "../contexts/AuthStorageContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBar,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER);

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();

    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link="/">Repositories</AppBarTab>
        {data?.authorizedUser ? (
          <AppBarTab onPress={logout} link="/signin">
            Sign out
          </AppBarTab>
        ) : (
          <AppBarTab link="/signin">Sign in</AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
