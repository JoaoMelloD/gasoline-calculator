import { useState } from "react";

interface combustivel {
  nome: string;
  valor: number;
}

export default function App() {
  const [resultado, setResultado] = useState("");
  const [alcool, setAlcool] = useState<combustivel>({
    nome: "Alcool",
    valor: 0,
  });

  const [gasolina, setGasolina] = useState<combustivel>({
    nome: "Gasolina",
    valor: 0,
  });

  function calcular(e: React.FormEvent) {
    e.preventDefault();
    if (gasolina.valor < alcool.valor) {
      console.log("Gasolina compensa mais");
      setResultado(`Compensa Usar Compensa Usar ${gasolina.nome}`);
      return;
    } else if (gasolina.valor > alcool.valor) {
      console.log("Alcool Compensa mais");
      setResultado(`Compensa Usar Compensa Usar ${alcool.nome}`);
    } else {
      setResultado("Os dois tipos de combustiveis possuem o mesmo valor!")      ;
      console.log("Os dois tem o mesmo valor!");  
    }
  }
  return (
    <div>
      <img src="./assets/logo.png" alt="logo" />
      <h1>Qual a melhor Opção?</h1>
      <form>
        <label>{alcool.nome}(Preço Por Litro)</label>
        <input
          type="number"
          value={alcool.valor}
          onChange={(e) =>
            setAlcool({ ...alcool, valor: Number(e.target.value) })
          }
        />
        <label>{gasolina.nome}(Preço Por Litro)</label>
        <input
          type="number"
          value={gasolina.valor}
          onChange={(e) =>
            setGasolina({ ...gasolina, valor: Number(e.target.value) })
          }
        />
        <button onClick={calcular}>Calcular</button>

        <div className="resultado">
          <h1>{resultado}</h1>
          <p>Alcool: R${alcool.valor}</p>
          <p>Gasolina: R${gasolina.valor}</p>
        </div>
      </form>
    </div>
  );
}
