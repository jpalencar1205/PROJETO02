import NewForm from './components/NewForm';

const CadastroUsuario = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center text-blue-500">Cadastro de Novo Usuário</h1>
      <NewForm />
    </div>
  );
};

export default CadastroUsuario;
