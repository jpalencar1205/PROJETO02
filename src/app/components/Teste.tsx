"use client"
import { useState } from "react";


type Propriedades = {
    nome : string,
    idade : number
}

export default function Teste({idade, nome}:Propriedades) {

  const [novaIdade, setNovaIdade] = useState<number>(idade);

  function aumentar(){
    setNovaIdade(novaIdade+1)
  }

    return (
      <div className="mb-5">
      <p>Meu nome é {nome} e tenho {novaIdade} anos</p>
      <button className="p-2 bg-green-700 text-white rounded" onClick={aumentar}>AUMENTAR IDADE</button>
      </div>
    );
  }
  