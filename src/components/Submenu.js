import React from "react";
import { Modal, View } from "react-native";
import styles from "../styles/Styles";
import InputsProps from "./TextInputProps";
import TextProps from "./TextProps";
import TouchableOpacityProps from "./TouchableOpacityProps";

export default function Submenu({ FuncoesTouch, Valores1, Valores2 }) {
  return (
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
  );
}
