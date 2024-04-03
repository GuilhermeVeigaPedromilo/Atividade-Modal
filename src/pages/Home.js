import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles/Styles";
import InputsProps from "../components/TextInputProps";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import Titulo from "../components/Título";
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
  const [mudarcor, setMudarcorBackground] = useState("black"); //Muda cor de fundo, sendo preto o estado inical

  const [mudarcortexto, setMudarcorTexto] = useState("white"); //Muda cor de texto, sendo branca o estado inical

  const [mudarcorInput, setMudarcorInput] = useState("white"); //Muda cor de fundo do input, sendo branco o estado inical

  const [mudarcorplaceholder, setMudarcorPlaceholder] = useState("black"); //Muda cor do placeholder, sendo preta o estado inical

  return (
    <View style={[styles.container, { backgroundColor: `${mudarcor}` }]}>
      <Titulo
        TouchCorFunctWhite={() => {
          setMudarcorBackground("white");
          setMudarcorTexto("black");
          setMudarcorInput("black");
          setMudarcorPlaceholder("white");
        }}
        TouchCorFunctBlack={() => {
          setMudarcorBackground("black");
          setMudarcorTexto("white");
          setMudarcorInput("white");
          setMudarcorPlaceholder("black");
        }}
        color={mudarcortexto}
      />
      <View style={{ alignItems: "center" }}>
        <View style={{ width: 310 }}>
          <TextProps
            TextStyle={[styles.label, { color: `${mudarcortexto}` }]}
            Texto={"Álcool (preço por litro):"}
          />
        </View>
        <InputsProps
          InputStyle={[
            styles.Inputs,
            {
              backgroundColor: `${mudarcorInput}`,
              borderColor: `${mudarcorInput}`,
              color: `${mudarcorplaceholder}`,
            },
          ]}
          Placeholder="Digite o valor do litro"
          TypeTeclado="numeric"
          onChangeText={Valores1}
        />
        <View style={{ width: 310 }}>
          <TextProps
            TextStyle={[styles.label, { color: `${mudarcortexto}` }]}
            Texto={"Gasolina (preço por litro):"}
          />
        </View>
        <InputsProps
          InputStyle={[
            styles.Inputs,
            {
              backgroundColor: `${mudarcorInput}`,
              borderColor: `${mudarcorInput}`,
              color: `${mudarcorplaceholder}`,
            },
          ]}
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
        TouchCorFunctWhite={() => {
          setMudarcorBackground("white");
          setMudarcorTexto("black");
        }}
        TouchCorFunctBlack={() => {
          setMudarcorBackground("black");
          setMudarcorTexto("white");
        }}
        backgroundColor={mudarcor}
        color={mudarcortexto}
      />
    </View>
  );
}
