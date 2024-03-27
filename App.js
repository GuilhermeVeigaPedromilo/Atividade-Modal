import React, { useState,} from "react";
import { Modal, Text, View } from "react-native";
import styles from "./src/styles/Styles";
import InputsProps from "./src/components/TextInputProps";
import TextProps from "./src/components/TextProps";
import TouchableOpacityProps from "./src/components/TouchableOpacityProps";
import Titulo from "./src/components/Título";
import ImageProps from "./src/components/ImageProps";


export default function App() {
  const [visivel, setVisivel] = useState(false);

  const [valorAlc, setValorAlc] = useState("");
  const [valorGas, setValorGas] = useState("");
  const [analisevalor, setAnalise] = useState("");

  const Calculo = () => {

    const result = valorAlc / valorGas;

    const analisevalor = result < 0.7 ? 'Álcool' : 'Gasolina';

    const conclusao = "Compensa usar " + analisevalor;
    setAnalise(conclusao);
    console.log(result);
  };
  return (
    <View style={styles.container}>
      <Titulo />
        <View>
          <TextProps
            TextStyle={styles.label}
            Texto={"Álcool (preço por litro):"}
          ></TextProps>
          <InputsProps InputStyle={styles.Inputs} TypeTeclado="numeric" onChangeText={setValorAlc} />
          <TextProps
            TextStyle={styles.label}
            Texto={"Gasolina (preço por litro):"}
          ></TextProps>
          <InputsProps InputStyle={styles.Inputs} onChangeText={setValorGas} TypeTeclado="numeric" />
          
        </View>
        <TouchableOpacityProps
        TouchStyle={[styles.Touch, {backgroundColor: '#ff0a02'}]}
        OnPress={() => {
          Calculo();
          setVisivel(true);
        }}
      >
        <TextProps TextStyle={[styles.TouchText, {color: 'white'}]} Texto={"Calcular"}></TextProps>
      </TouchableOpacityProps>
      <Modal animationType="slide" transparent={true} visible={visivel}>
        <View style={styles.container}>
        <ImageProps ImageUri={require('./src/assets/images/gas.png')} ImageStyle={styles.ImagesStyles}/>
        <TextProps TextStyle={[styles.h1, {color: 'yellow'}]} Texto={analisevalor} />
        <TextProps TextStyle={[styles.h2, {color: 'white'}]} Texto="Com os preços (R$):"/>
        <TextProps TextStyle={styles.Values} Texto={valorAlc}/>
        <TextProps TextStyle={styles.Values} Texto={valorGas}/>
          <TouchableOpacityProps
            OnPress={() => {
              setVisivel(false);
            }}
            TouchStyle={[styles.Touch, { borderColor: '#0ba407'}]}>
            <TextProps TextStyle={[styles.TouchText, {color: '#0ba407',}]} Texto={"Calcular novamente"}></TextProps>
          </TouchableOpacityProps>
        </View>
      </Modal>
    </View>
  );
}