import { FormEvent, useState } from "react";
import logoImg from "./assets/logo.png";
import "./App.css";

// Calculadora:
/*
Calculo: alcool/gasolina - Se o resultado for menor que 0.7 compensa usar alcool
*/

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}
export default function App() {
  const [gasolinaInput, setGasolinaInput] = useState(1);
  const [alcoolInput, setAlcoolInput] = useState(1);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    const calculo = alcoolInput / gasolinaInput;

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa Usar Alcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    } else {
      setInfo({
        title: "Compensa Usar Gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput), 
      });
    }
  }

  function formatarMoeda(valor: number) {
    const valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  }

  return (
    <div>
      <main className="container">
        <img className="logo" src={logoImg} alt="logo-imagem" />
        <h1 className="title">Qual A Melhor Opção?</h1>

        <form className="form" onSubmit={calcular}>
          <label>Álcool(Preço Por Litro)</label>
          <input
            className="input"
            type="number"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />
          <label>Gasolina(Preço Por Litro)</label>
          <input
            className="input"
            type="number"
            placeholder="1,90"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />
          <input className="button" type="submit" value="Calcular" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info?.title}</h2>
            <span>Álcool: {info?.alcool}</span>
            <span>Gasolina: {info?.gasolina}</span>
          </section>
        )}
      </main>
    </div>
  );
}
