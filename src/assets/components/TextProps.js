import { Text } from "react-native";

export default function TextProps({ texto, TextStyle }) {
  return <Text style={TextStyle}> {texto}</Text>;
}
