import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { styles } from "./src/styles/Styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
        Qual melhor opção?
      </Text>
    </View>
  );
}
