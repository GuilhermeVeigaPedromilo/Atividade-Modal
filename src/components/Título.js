import { View } from "react-native";
import styles from "../styles/Styles";
import ImageProps from "./ImageProps";
import TextProps from "./TextProps";
import TouchCor from "./TouchCor";

export default function Titulo({
  TouchCorFunctWhite,
  TouchCorFunctBlack,
  color,
}) {
  return (
    <View>
      <TouchCor
        TouchCorFunctWhite={TouchCorFunctWhite}
        TouchCorFunctBlack={TouchCorFunctBlack}
      />
      <View style={{ alignItems: "center" }}>
        <ImageProps
          ImageUri={require("../assets/images/logo.png")}
          ImageStyle={styles.ImagesStyles}
        />
        <TextProps
          TextStyle={[styles.h1, { color: `${color}` }]}
          Texto={"Qual é melhor opção?"}
        ></TextProps>
      </View>
    </View>
  );
}
