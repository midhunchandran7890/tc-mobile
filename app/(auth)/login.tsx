import { yupResolver } from "@hookform/resolvers/yup";
import { Image } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";

import { AppButton } from "../../components/AppButton/AppButton";
import { AppText } from "../../components/AppText/AppText";
import { AppTextInput } from "../../components/AppTextInput/AppTextInput";
import { styles } from "../../styles/login";

const Login = () => {
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(`Email:${data.email} Password:${data.password}`);
    reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/app-logo.png")}
          style={styles.appLogo}
        />
      </View>
      <View style={styles.loginContainer}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.emailInputContainer}>
              <AppTextInput
                placeholder="Email"
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        {errors?.email?.message ? (
          <View style={styles.emailInputContainer}>
            <AppText text={errors.email.message} style={{ color: "red" }} />
          </View>
        ) : null}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Email is required",
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.passwordInputContainer}>
              <AppTextInput
                placeholder="Password"
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        {errors?.password?.message ? (
          <View style={styles.emailInputContainer}>
            <AppText text={errors.password.message} style={{ color: "red" }} />
          </View>
        ) : null}
        <View style={styles.loginButtonContainer}>
          <AppButton label="Login" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
      <View style={styles.socialLoginContainer}>
        <AppText text={"Or Sign in with"} style={{ fontWeight: "bold" }} />
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
        <AppText text={"Haven't any account? "} />
        <TouchableOpacity>
          <AppText
            text={"Create account"}
            style={{ fontWeight: "bold", color: "#3B7D6E" }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
