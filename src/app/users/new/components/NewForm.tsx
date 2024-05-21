'use client';
import { useState } from 'react';
  
export default function NewForm() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState(''); // Novo campo
  const [email, setEmail] = useState(''); // Novo campo
  const [estadoCivil, setEstadoCivil] = useState(''); // Novo campo
  
  const handleCadastro = () => {
    // Lógica para enviar os dados do novo usuário para o servidor
    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Senha:', senha);
    console.log('Telefone:', telefone); // Novo campo
    console.log('Email:', email); // Novo campo
    console.log('Estado Civil:', estadoCivil); // Novo campo
  };

  const handleVisualizarCadastro = () => {
    // Lógica para visualizar o cadastro
    console.log('Visualizando cadastro:');
    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Senha:', senha);
    console.log('Telefone:', telefone); // Novo campo
    console.log('Email:', email); // Novo campo
    console.log('Estado Civil:', estadoCivil); // Novo campo
  };

  return (
    <div className="flex flex-col items-center">
      <input type="text" placeholder="Nome" className="border border-gray-400 rounded-md p-2 mb-3" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="text" placeholder="CPF" className="border border-gray-400 rounded-md p-2 mb-3" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      <input type="password" placeholder="Senha" className="border border-gray-400 rounded-md p-2 mb-3" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <input type="text" placeholder="Telefone" className="border border-gray-400 rounded-md p-2 mb-3" value={telefone} onChange={(e) => setTelefone(e.target.value)} /> {/* Novo campo */}
      <input type="email" placeholder="Email" className="border border-gray-400 rounded-md p-2 mb-3" value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Novo campo */}
      <input type="text" placeholder="Estado Civil" className="border border-gray-400 rounded-md p-2 mb-3" value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} /> {/* Novo campo */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-3" onClick={handleCadastro}>
        CADASTRAR 
      </button>
      <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600" onClick={handleVisualizarCadastro}>
        VISUALIZAR CADASTROS
      </button>
    </div>
  );
}
