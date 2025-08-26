import { Text, View } from "react-native";

import { styles } from "../../styles/login";

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>App logo</Text>
      </View>
      <View>
        <Text>Login Form</Text>
      </View>
      <View>
        <Text>Social Logins</Text>
      </View>
      <View>
        <Text>Account Creation</Text>
      </View>
    </View>
  );
};

export default Login;
