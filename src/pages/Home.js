import React from "react";
import { Modal, View } from "react-native";
import styles from "../styles/Styles";
import InputsProps from "../components/TextInputProps";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import Titulo from "../components/Título";

export default function Home({ FuncoesTouch, Valores1, Valores2 }) {
  return (
    <View>      <Titulo/>
    <View style={{ alignItems: "center" }}>
      <View style={{ width: 310 }}>
        <TextProps
          TextStyle={styles.label}
          Texto={"Álcool (preço por litro):"}
        />
      </View>
      <InputsProps
        InputStyle={styles.Inputs}
        Placeholder="Digite o valor do litro"
        TypeTeclado="numeric"
        onChangeText={Valores1}
      />
      <View style={{ width: 310 }}>
        <TextProps
          TextStyle={styles.label}
          Texto={"Gasolina (preço por litro):"}
        />
      </View>
      <InputsProps
        InputStyle={styles.Inputs}
        Placeholder="Digite o valor do litro"
        onChangeText={Valores2}
        TypeTeclado="numeric"
      />
      <TouchableOpacityProps
        TouchStyle={[styles.Touch, { backgroundColor: "#ff0a02" }]}
        OnPress={FuncoesTouch}
      >
        <TextProps
          TextStyle={[styles.TouchText, { color: "white" }]}
          Texto={"Calcular"}
        ></TextProps>
      </TouchableOpacityProps>
    </View>
    </View>
  );
}
