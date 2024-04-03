import React from "react";
import { View } from "react-native";
import styles from "../styles/Styles";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";
import ModalComp from "../components/Modal";
import TouchCor from "../components/TouchCor";

export default function ModalPage({
  Visualizar,
  Analise,
  Valor1,
  Valor2,
  FuncoesTouch,
  TouchCorFunctWhite,
  TouchCorFunctBlack,
  backgroundColor,
  color,
}) {
  return (
    <View>
      <ModalComp Visualizar={Visualizar}>
        <View
          style={[styles.container, { backgroundColor: `${backgroundColor}` }]}
        >
          <View>
            <TouchCor
              TouchCorFunctWhite={TouchCorFunctWhite}
              TouchCorFunctBlack={TouchCorFunctBlack}
            />
          </View>
          <ImageProps
            ImageUri={require("../assets/images/gas.png")}
            ImageStyle={styles.ImagesStyles}
          />
          <TextProps
            TextStyle={[styles.h1, { color: "orange" }]}
            Texto={Analise}
          />
          <TextProps
            TextStyle={[styles.h2, { color: `${color}`, marginBottom: 10 }]}
            Texto="Com os preços por litro:"
          />
          <TextProps
            TextStyle={[styles.Values, { color: `${color}` }]}
            Texto={`Álcool: R$${Valor1}`}
          />
          <TextProps
            TextStyle={[styles.Values, { color: `${color}` }]}
            Texto={`Gasolina: R$${Valor2}`}
          />
          <TouchableOpacityProps
            OnPress={FuncoesTouch}
            TouchStyle={[styles.TouchBack, { borderColor: "red" }]}
          >
            <TextProps
              TextStyle={[styles.TouchText, { color: "red" }]}
              Texto={"Calcular novamente"}
            ></TextProps>
          </TouchableOpacityProps>
        </View>
      </ModalComp>
    </View>
  );
}
