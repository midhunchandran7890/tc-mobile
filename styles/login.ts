import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logoContainer: {
    paddingVertical: 50,
    alignItems: "center",
  },
  appLogo: {
    width: width * 0.3,
    height: width * 0.3,
  },
  loginContainer: { backgroundColor: "blue" },
  socialLoginContainer: {
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "center",
  },
  accountCreationContainer: { backgroundColor: "yellow" },
});
