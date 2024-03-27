import { TextInput } from "react-native";

export default function InputProps({ InputStyle, Placeholder, TypeTeclado, onChangeText }) {
  return (
    <TextInput
      style={InputStyle}
      placeholder={Placeholder}
      keyboardType={TypeTeclado}
      onChangeText={onChangeText}
    ></TextInput>
  );
}
