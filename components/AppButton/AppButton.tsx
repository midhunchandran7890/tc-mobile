import { Text, TouchableOpacity } from "react-native";

import { styles } from "./AppButton.styles";
import { AppButtonProps } from "./AppButton.types";

export const AppButton = ({ label }: AppButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
