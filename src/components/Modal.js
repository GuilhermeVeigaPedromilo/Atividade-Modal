import React from "react";
import { Modal, View } from "react-native";
import styles from "../styles/Styles";
import TextProps from "./TextProps";
import TouchableOpacityProps from "./TouchableOpacityProps";
import ImageProps from "./ImageProps";

export default function ModalComp({
  Visible,
  Analise,
  Valor1,
  Valor2,
  FuncoesTouch,
}) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={Visible}>
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
      </Modal>
    </View>
  );
}
