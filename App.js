import React, { useState } from "react";
import { Modal, View } from "react-native";
import styles from "./src/styles/Styles";
import InputsProps from "./src/components/TextInputProps";
import TextProps from "./src/components/TextProps";
import TouchableOpacityProps from "./src/components/TouchableOpacityProps";
import Titulo from "./src/components/Título";
import ImageProps from "./src/components/ImageProps";

export default function App() {
  const Aviso = () => {
    alert('Caso houver valores com decimal, em vez de "," utilize "."');
  };

  const [visivel, setVisivel] = useState(false);

  const [valorAlc, setValorAlc] = useState("");
  const [valorGas, setValorGas] = useState("");
  const [analisevalor, setAnalise] = useState("");

  const Calculo = () => {
    const result = valorAlc / valorGas;

    const analisevalor = result < 0.7 ? "Álcool" : "Gasolina";

    const conclusao = "Compensa usar " + analisevalor;
    setAnalise(conclusao);
    console.log(result);
  };
  return (
    <View style={styles.container}>
      <Titulo />
      <TouchableOpacityProps>
        <TextProps
          TextStyle={styles.label}
          Texto={"Álcool (preço por litro):"}
        ></TextProps>
        <InputsProps
          InputStyle={styles.Inputs}
          Placeholder="Digite o valor do litro"
          TypeTeclado="numeric"
          onChangeText={setValorAlc}
        />
        <TextProps
          TextStyle={styles.label}
          Texto={"Gasolina (preço por litro):"}
        ></TextProps>
        <InputsProps
          InputStyle={styles.Inputs}
          Placeholder="Digite o valor do litro"
          onChangeText={setValorGas}
          TypeTeclado="numeric"
        />
      </TouchableOpacityProps>

      <TouchableOpacityProps
        TouchStyle={[styles.Touch, { backgroundColor: "#ff0a02" }]}
        OnPress={() => {
          Aviso();
          Calculo();
          setVisivel(true);
        }}
      >
        <TextProps
          TextStyle={[styles.TouchText, { color: "white" }]}
          Texto={"Calcular"}
        ></TextProps>
      </TouchableOpacityProps>
      <Modal animationType="slide" transparent={true} visible={visivel}>
        <View style={styles.container}>
          <ImageProps
            ImageUri={require("./src/assets/images/gas.png")}
            ImageStyle={styles.ImagesStyles}
          />
          <TextProps
            TextStyle={[styles.h1, { color: "orange" }]}
            Texto={analisevalor}
          />
          <TextProps
            TextStyle={[styles.h2, { color: "white", marginBottom: 10 }]}
            Texto="Com os preços por litro:"
          />
          <TextProps
            TextStyle={styles.Values}
            Texto={`Álcool: R$${valorAlc}`}
          />
          <TextProps
            TextStyle={styles.Values}
            Texto={`Gasolina: R$${valorGas}`}
          />
          <TouchableOpacityProps
            OnPress={() => {
              Aviso();
              setVisivel(false);
            }}
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
