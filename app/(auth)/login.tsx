import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { Image } from "expo-image";
import { styles } from "../../styles/login";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/app-logo.png")}
          style={{ width: 100, height: 100, alignSelf: "center" }}
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
    </View>
  );
};

export default Login;
