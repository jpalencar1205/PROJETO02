'use client';

import { useState } from 'react';

export default function Farol() {
  const [carroPara, setCarroPara] = useState<boolean>(false);
  const [carroAnda, setCarroAnda] = useState<boolean>(false);
  const [carroAtencao, setCarroAtencao] = useState<boolean>(false);

  const [pedestrePara, setPedestrePara] = useState<boolean>(true); // Começa como true (vermelho)
  const [pedestreAnda, setPedestreAnda] = useState<boolean>(false);

  function funcao1() {
    setCarroPara(true);
    setCarroAnda(false);
    setCarroAtencao(false);
    setPedestreAnda(true);
    setPedestrePara(false);
  }

  function funcao2() {
    setCarroPara(false);
    setCarroAnda(true);
    setPedestreAnda(false);
    setPedestrePara(true);
  }

  function funcao3() {
    setCarroAnda(false);
    setCarroAtencao(true);
    setPedestreAnda(true);
    setPedestrePara(false);
  }

  function funcao4() {
    setCarroAtencao(false);
    setCarroPara(true);
    setPedestreAnda(true);
    setPedestrePara(false);
  }

  function handleCarroClick() {
    if (!carroPara && !carroAnda) {
      funcao1();
    } else if (carroPara) {
      funcao2();
    } else if (carroAnda) {
      funcao3();
    } else if (carroAtencao) {
      funcao4();
    }
  }

  function handlePedestreClick() {
    if (!pedestrePara && !pedestreAnda) {
      setPedestrePara(true);
      setPedestreAnda(false);
      setCarroAnda(true);
      setCarroPara(false);
      setCarroAtencao(false);
    } else if (pedestrePara) {
      setPedestrePara(false);
      setPedestreAnda(true);
    } else if (pedestreAnda) {
      setPedestreAnda(false);
      setPedestrePara(true);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Farol de carros */}
      <div style={{ marginRight: '20px', textAlign: 'center' }}>
        <div
          style={{
            width: '100px',
            height: '250px',
            backgroundColor: '#333',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          onClick={handleCarroClick}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: carroPara ? 'red' : '#222', margin: 'auto' }} />
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: carroAtencao ? 'yellow' : '#222', margin: 'auto' }} />
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: carroAnda ? 'green' : '#222', margin: 'auto' }} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <p>
            Para: <input type="checkbox" checked={carroPara} onChange={() => setCarroPara(!carroPara)} disabled={carroAnda || carroAtencao} />
          </p>
          <p>
            Atenção: <input type="checkbox" checked={carroAtencao} onChange={() => setCarroAtencao(!carroAtencao)} disabled={carroPara || carroAnda} />
          </p>
          <p>
            Anda: <input type="checkbox" checked={carroAnda} onChange={() => setCarroAnda(!carroAnda)} disabled={carroPara || carroAtencao} />
          </p>
        </div>
      </div>

      {/* Farol de pedestres */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '100px',
            height: '250px',
            backgroundColor: '#333',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          onClick={handlePedestreClick}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: pedestrePara ? 'red' : 'green', margin: 'auto' }} />
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: pedestreAnda ? 'green' : '#222', margin: 'auto' }} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <p>
            Para: <input type="checkbox" checked={pedestrePara} onChange={() => setPedestrePara(!pedestrePara)} disabled={pedestreAnda} />
          </p>
          <p>
            Anda: <input type="checkbox" checked={pedestreAnda} onChange={() => setPedestreAnda(!pedestreAnda)} disabled={pedestrePara} />
          </p>
        </div>
      </div>
    </div>
  );
}
