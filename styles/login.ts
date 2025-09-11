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
  loginContainer: {},
  emailInputContainer: {
    // backgroundColor: "blue",
    marginHorizontal: 20,
  },
  passwordInputContainer: { marginHorizontal: 20, marginTop: 20 },
  loginButtonContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  socialLoginContainer: {
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  accountCreationContainer: { backgroundColor: "yellow" },
});
