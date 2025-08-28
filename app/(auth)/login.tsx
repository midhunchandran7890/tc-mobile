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
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
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
