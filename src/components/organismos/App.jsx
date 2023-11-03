import '../../../src/App.css'
import { useState } from 'react';
import Boton from '../atomos/Boton';
import Pantalla from '../atomos/Pantalla.jsx';
import BotonReset from '../atomos/BotonReset.jsx';

import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  };

  function resultado() {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Agregue antes valores a calcular.');
    }
  }

  function calcularFuncion(funcion) {
    if (input) {
      try {
        const resultadoFuncion = evaluate(`${funcion}`);
        setInput(resultadoFuncion);
      } catch (error) {
        alert('Error en la expresión matemática.');
      }
    }
  }

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={resultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={() => calcularFuncion('sqrt')}>√</Boton>
          <Boton manejarClic={() => calcularFuncion('pow('+input+',2)')}>x²</Boton>
          <Boton manejarClic={() => agregarInput(Math.PI)}>π</Boton>
          <Boton manejarClic={agregarInput}>H</Boton>
        </div>
        <div className="fila">
          <BotonReset manejarReset={() => setInput('')}>
            Reset
          </BotonReset>
        </div>
      </div>
    </div>
  );
}

export default App;
