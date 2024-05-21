import ListUsers from './components/ListUsers';

export default function PageListUsers() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center text-pedro-blue-300">Lista de Usuários</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ListUsers />
      </div>
    </div>
  );
}
