import React, { useState } from "react";
import { View } from "react-native";
import styles from "./src/styles/Styles";
import Titulo from "./src/components/Título";
import Submenu from "./src/components/Submenu";
import ModalComp from "./src/components/Modal";

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
      <Titulo />
      <Submenu
        Valores1={setValorAlc}
        Valores2={setValorGas}
        FuncoesTouch={() => {
          Calculo();
          setVisivel(true);
        }}
      />
      <ModalComp
        Visible={visivel}
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
