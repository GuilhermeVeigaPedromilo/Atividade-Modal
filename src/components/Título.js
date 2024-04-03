import { View } from "react-native";
import styles from "../styles/Styles";
import ImageProps from "./ImageProps";
import TextProps from "./TextProps";
import TouchCor from "./TouchCor";

export default function Titulo({ TouchCorFunctWhite, TouchCorFunctBlack }) {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchCor
        TouchCorFunctWhite={TouchCorFunctWhite}
        TouchCorFunctBlack={TouchCorFunctBlack}
      />
      <ImageProps
        ImageUri={require("../assets/images/logo.png")}
        ImageStyle={styles.ImagesStyles}
      />
      <TextProps
        TextStyle={[styles.h1, { color: "white" }]}
        Texto={"Qual é melhor opção?"}
      ></TextProps>
    </View>
  );
}
