import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logoContainer: {
    paddingVertical: 80,
    alignItems: "center",
  },
  appLogo: {
    width: width * 0.3,
    height: width * 0.3,
  },
  loginContainer: {},
  emailInputContainer: {
    marginHorizontal: 20,
  },
  passwordInputContainer: { marginHorizontal: 20, marginTop: 20 },
  loginButtonContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  socialLoginContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  accountCreationContainer: {
    flexDirection: "row",
    marginTop: 20,
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
});
