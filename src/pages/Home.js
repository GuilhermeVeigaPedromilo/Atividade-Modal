import React from "react";
import { View } from "react-native";
import styles from "../styles/Styles";
import InputsProps from "../components/TextInputProps";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import Titulo from "../components/Título";
import ModalComp from "../components/Modal";
import ModalPage from "./ModalPage";

export default function Home({
  FuncoesTouch,
  FuncoesTouchClose,
  Valores1,
  Valores2,
  Analise,
  Valor1,
  Valor2,
  Visualizar,
}) {
  console.log(Visualizar);
  return (
    <View style={styles.container}>
      <Titulo />
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
          />
        </TouchableOpacityProps>
      </View>
      <ModalPage
        Visualizar={Visualizar}
        Analise={Analise}
        Valor1={Valor1}
        Valor2={Valor2}
        FuncoesTouch={FuncoesTouchClose}
      />
    </View>
  );
}
