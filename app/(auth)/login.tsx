import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppButton } from "../../components/AppButton/AppButton";
import { AppTextInput } from "../../components/AppTextInput/AppTextInput";
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
          <AppTextInput placeholder="Email" />
        </View>
        <View style={styles.passwordInputContainer}>
          <AppTextInput placeholder="Password" />
        </View>
        <View style={styles.loginButtonContainer}>
          <AppButton label="Login" onPress={() => alert("Login")} />
        </View>
      </View>
      <View style={styles.socialLoginContainer}>
        <Text style={{ fontWeight: "bold" }}>Or Sign in with</Text>
        <View style={{ flexDirection: "row", gap: 20, marginTop: 10 }}>
          <Image
            source={require("../../assets/images/app-logo.png")}
            style={{ width: 35, height: 35, alignSelf: "center" }}
          />
          <Image
            source={require("../../assets/images/app-logo.png")}
            style={{ width: 35, height: 35, alignSelf: "center" }}
          />
        </View>
      </View>
      <View style={styles.accountCreationContainer}>
        <Text>Haven't any account? </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold", color: "#3B7D6E" }}>
            Create account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
