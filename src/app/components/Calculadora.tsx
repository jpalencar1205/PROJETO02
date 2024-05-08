'use client';

import { useState } from 'react';

const nomes: string[] = [];
export default function Calculadora() {
  const [resultado, setResultado] = useState<number>(0);
  const [visor, setVisor] = useState<number>(0);
  const [error, setError] = useState<string>();

  function soma() {
    nomes.push('Somei: ' + visor);
    setError(undefined);
    setResultado(resultado + visor);
    setVisor(0);
  }

  function limpa() {
    nomes.push('Reset');
    setError(undefined);
    setResultado(0);
    setVisor(0);
  }

  function subtrai() {
    nomes.push('Subtraido: ' + visor);
    setError(undefined);
    setResultado(resultado + visor);
    setVisor(0);
  }

  function divide() {
    setError(undefined);
    if (visor != 0) {
      nomes.push('Dividido: ' + visor);  
      setResultado(resultado / visor);
      setVisor(0);
    } else {
      setError('Não é possivel dividir por zero');
    }
    
  }

  function multiplica() {
    nomes.push('Multiplicado: ' + visor);
    setError(undefined);
    setResultado(resultado * visor);
    setVisor(0);
  }

  return (
    <div className="border border-gray-950 p-10 rounded-xl ">
      <p>Digite seu número</p>
      <input
        value={visor}
        onChange={(e) => {
          setVisor(Number(e.target.value));
        }}
        type="number"
        min={0}
        className="border border-gray-500 px-4 py-2 text-blue-700 font-bold"
      />

      <div className="grid grid-cols-3 mt-8 gap-2">
        <button
          type="button"
          className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg"
          onClick={() => {
            soma();
          }}>
          +
        </button>
        <button
          type="button"
          className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg"
          onClick={() => {
            subtrai();
          }}>
          -
        </button>
        <button
          type="button"
          className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg"
          onClick={() => {
            limpa();
          }}>
          C
        </button>
        <button
          type="button"
          className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg"
          onClick={() => {
            divide();
          }}>
          /
        </button>
        <button
          type="button"
          className="bg-blue-400 text-white text-center font-bold py-2 rounded-lg"
          onClick={() => {
            multiplica();
          }}>
          X
        </button>
      </div>

      <div className="mt-6 border border-gray-600">
        <p className="text-gray-950 px-2 text-2xl">
          RESULTADO: <span className="font-black">{resultado.toFixed(2)}</span>
        </p>
      </div>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

      <p>Historico</p>

      {nomes.map(function (item) {
        return <p className="text-blue-700 mt-2">{item}</p>;
      })}
    </div>
  );
}
