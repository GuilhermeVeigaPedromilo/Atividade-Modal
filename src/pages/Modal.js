import React from "react";
import { Modal, View } from "react-native";
import styles from "../styles/Styles";
import TextProps from "../components/TextProps";
import TouchableOpacityProps from "../components/TouchableOpacityProps";
import ImageProps from "../components/ImageProps";
import ModalComp from "../components/Modal";

export default function ModalComp({
  Visiualizar,
  Analise,
  Valor1,
  Valor2,
  FuncoesTouch,
}) {
  return (
    <View>
      <ModalComp Visible={Visiualizar}>
        <View style={styles.container}>
          <ImageProps
            ImageUri={require("../assets/images/gas.png")}
            ImageStyle={styles.ImagesStyles}
          />
          <TextProps
            TextStyle={[styles.h1, { color: "orange" }]}
            Texto={Analise}
          />
          <TextProps
            TextStyle={[styles.h2, { color: "white", marginBottom: 10 }]}
            Texto="Com os preços por litro:"
          />
          <TextProps TextStyle={styles.Values} Texto={`Álcool: R$${Valor1}`} />
          <TextProps
            TextStyle={styles.Values}
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
