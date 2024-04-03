import React, { useState } from "react";
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
    <Home
      Valores1={setValorAlc}
      Valores2={setValorGas}
      FuncoesTouch={() => {
        Calculo();
        setVisivel(true);
      }}
      Visualizar={visivel}
      Analise={analisevalor}
      Valor1={valorAlc}
      Valor2={valorGas}
      FuncoesTouchClose={() => {
        setVisivel(false);
        Aviso();
      }}
    />
  );
}
