import { AsyncStorage } from "react-native";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:access-token`
    );

    return accessToken;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:access-token`, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:access-token`);
  }
}

export default AuthStorage;
