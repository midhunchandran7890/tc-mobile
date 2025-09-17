import { TextInput } from "react-native";

import { styles } from "./AppTextInput.styles";
import { AppTextInputProps } from "./AppTextInput.types";

export const AppTextInput = ({ placeholder }: AppTextInputProps) => {
  return <TextInput placeholder={placeholder} style={styles.textInput} />;
};
