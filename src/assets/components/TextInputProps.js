import { TextInput } from "react-native";

export default function TextInputProps({ InputStyle, Placeholder, keyboard }) {
  return (
    <TextInput
      style={InputStyle}
      placeholder={Placeholder}
      keyboardType={keyboard}
    ></TextInput>
  );
}
