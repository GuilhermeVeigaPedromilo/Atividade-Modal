import React, { useState } from "react";
import { View } from "react-native";
import styles from "./src/styles/Styles";
import ModalComp from "./src/pages/Modal";
import Home from "./src/pages/Home";

export default function App() {
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

  const Aviso = () => {
    alert('Caso houver valores com decimal, em vez de "," utilize "."');
  };
  return (
    <View style={styles.container}>
      <Home
        Valores1={setValorAlc}
        Valores2={setValorGas}
        FuncoesTouch={() => {
          Calculo();
          setVisivel(true);
        }}
      />
      <ModalComp
        Visiualizar={visivel}
        Analise={analisevalor}
        Valor1={valorAlc}
        Valor2={valorGas}
        FuncoesTouch={() => {
          setVisivel(false);
          Aviso();
        }}
      />
    </View>
  );
}
