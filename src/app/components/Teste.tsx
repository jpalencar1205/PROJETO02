

type Propriedades = {
    nome : string,
    idade : number
}

export default function Teste({idade, nome}:Propriedades) {


    return (
      <p>Meu nome é {nome} e tenho {idade} anos</p>
    );
  }
  