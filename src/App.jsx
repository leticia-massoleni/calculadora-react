import { useState } from "react";
import "./style.scss";

export default function App(){
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [result, setResult] = useState();

  const getValor1 = (e) => {
    setValor1(Number(e.target.value));
    console.log(e.target.value);
  };

  const getValor2 = (e) => {
    setValor2(Number(e.target.value));
    console.log(e.target.value);
  };

  const soma = () => {
    setResult(valor1 + valor2);
  };
  const subtracao = () => {
    setResult(valor1 - valor2);
  };
  const multiplicacao = () => {
    setResult(valor1 * valor2);
  };
  const divisao = () => {
    setResult(valor1 / valor2);
  };

  return(
    <main>
      <h1>Calculadora</h1>
      <input type="number" placeholder="Digite o primeiro número" onChange={getValor1}></input>
      <input type="number" placeholder="Digite o segundo número" onChange={getValor2}></input>
      <button onClick={soma}> + </button>
      <button onClick={subtracao}> - </button>
      <button onClick={multiplicacao}> x </button>
      <button onClick={divisao}> / </button>
      <h3>{result}</h3>
    </main>
  )
}