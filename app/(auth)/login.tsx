import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Image } from "expo-image";
import { styles } from "../../styles/login";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/app-logo.png")}
          style={styles.appLogo}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.emailInputContainer}>
          <TextInput
            placeholder="Email"
            style={{
              // backgroundColor: "blue",
              borderColor: "#DCE5E2",
              borderWidth: 1,
              borderRadius: 10,
              height: 50,
            }}
          />
        </View>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Password"
            style={{
              // backgroundColor: "red",
              borderColor: "#DCE5E2",
              borderWidth: 1,
              borderRadius: 10,
              height: 50,
            }}
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: "#3B7D6E",
              alignItems: "center",
              paddingVertical: 15,
              borderRadius: 10,
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.socialLoginContainer}>
        <Image
          source={require("../../assets/images/app-logo.png")}
          style={{ width: 35, height: 35, alignSelf: "center" }}
        />
        <Image
          source={require("../../assets/images/app-logo.png")}
          style={{ width: 35, height: 35, alignSelf: "center" }}
        />
      </View>
      <View style={styles.accountCreationContainer}>
        <TouchableOpacity>
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
