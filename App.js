import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
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

      <TextInput
    placeholder='Insira o preço do álcool'
    inputMode={'text'}
    style={styles.alcool}
    />
          <TextInput
    placeholder='Insira o preço da gasolina'
    inputMode={'text'}
    style={styles.gasolina}
    />

<TouchableOpacity
        style={styles.botao}
        onPress={() => alert("Calculo Realizado")}
      >
        <Text
          style={{ fontSize: 20, color: "black", textAlign: "center", }}
        >
          Calcular
        </Text>
      </TouchableOpacity>





      
    </View>
  );
}
