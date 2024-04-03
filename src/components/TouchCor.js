import React from "react";
import { View } from "react-native";
import styles from "../styles/Styles";
import TouchableOpacityProps from "./TouchableOpacityProps";
import TextProps from "./TextProps";

export default function TouchCor({ TouchCorFunctWhite, TouchCorFunctBlack }) {
  return (
    <View style={{ justifyContent: "center" }}>
      <TouchableOpacityProps
        OnPress={TouchCorFunctWhite}
        TouchStyle={[styles.TouchCor, { backgroundColor: "#97dcf8" }]}
      ></TouchableOpacityProps>
      <TouchableOpacityProps
        OnPress={TouchCorFunctBlack}
        TouchStyle={[styles.TouchCor, { backgroundColor: "black" }]}
      ></TouchableOpacityProps>
    </View>
  );
}
