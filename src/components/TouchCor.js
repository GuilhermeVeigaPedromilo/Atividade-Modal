import React from "react";
import { View } from "react-native";
import styles from "../styles/Styles";
import TouchableOpacityProps from "./TouchableOpacityProps";
import ImageProps from "./ImageProps";

export default function TouchCor({ TouchCorFunctWhite, TouchCorFunctBlack }) {
  return (
    <View
      style={{
        height: 80,
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        gap: 180,
      }}
    >
      <TouchableOpacityProps OnPress={TouchCorFunctWhite}>
        <ImageProps
          ImageStyle={styles.TouchLight}
          ImageUri={require("../assets/images/lampOn.png")}
        />
      </TouchableOpacityProps>
      <TouchableOpacityProps OnPress={TouchCorFunctBlack}>
        <ImageProps
          ImageStyle={styles.TouchLight}
          ImageUri={require("../assets/images/lampOff.png")}
        />
      </TouchableOpacityProps>
    </View>
  );
}
