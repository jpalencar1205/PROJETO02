'use client';
import { getUsers } from '@/lib/users/getUser';
import { Users } from 'UsersTypes';

export default async function ListUsers() {
  const userList = await getUsers()
    .then((response) => {
      if (response.return == 'error') {
        throw new Error(response.message);
      }

      return response.data;
    })
    .catch((error: any) => {
      return error.message;
    });

  //   if (busca.return == 'error') {
  //     return <p>{busca.message}</p>;
  //   }

  //   const userList = busca.data;

  return (
    <>
      {typeof userList == 'object' && (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">Nome</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">CPF</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">Idade</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: Users) => (
              <tr key={user.cpf} className="bg-pedro-blue-300/20 hover:bg-pedro-blue-300/40 transition-colors">
                <td className="py-3 px-4 border-b border-gray-200">{user.name}</td>
                <td className="py-3 px-4 border-b border-gray-200">{user.cpf}</td>
                <td className="py-3 px-4 border-b border-gray-200">{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {typeof userList == 'string' && <p>{userList}</p>}
    </>
  );
}
