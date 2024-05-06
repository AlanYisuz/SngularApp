import { useState } from "react";
import { serieTerm } from "../helpers/serie";
import Result from "./Result";

export default function Form() {
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState([]);

  const enviarNumero = () => {
    if (number > 0) {
      setResult(serieTerm(number));
    } else {
      alert("introduce un numero valido");
    }
  };

  return (
    <div className="container">
      <h1>Encuentra el término de la serie</h1>
      <br/>
      <span>Introduce el valor de n:</span>
      <input
        type="number"
        required
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => enviarNumero()}>Encontrar término</button>
      <div className="result">
        {
          result.length > 0 && 
            <Result term={result}/>
        }
      </div>
    </div>
  );
}
