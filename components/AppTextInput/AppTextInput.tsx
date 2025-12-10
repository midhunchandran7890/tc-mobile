import { TextInput, TextInputProps } from "react-native";

import { styles } from "./AppTextInput.styles";
import { AppTextInputProps } from "./AppTextInput.types";

export const AppTextInput = (props: AppTextInputProps) => {
  const { style, placeholder, ...rest } = props as TextInputProps;
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.textInput, style]}
      {...rest}
    />
  );
};
