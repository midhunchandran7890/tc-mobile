import { Text } from "react-native";

import { AppTextProps } from "./AppText.types";

export const AppText = ({ text, style }: AppTextProps) => {
  return <Text style={style}>{text}</Text>;
};
