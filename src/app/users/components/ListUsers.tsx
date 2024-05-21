'use client';
import { getUsers } from '@/lib/users/getUser';
import { Users } from 'UsersTypes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ListUsers() {
  const [userList, setUserList] = useState<Users[] | string>('Carregando...');

  const [pode, setPode] = useState<boolean>(false);

  useEffect(() => {
    setUserList('Carregando...');
    getUsers()
      .then((response) => {
        if (response.return == 'error') {
          throw new Error(response.message);
        }

        setUserList(response.data);
      })
      .catch((error: any) => {
        setUserList(error.message);
      });
  }, [pode]);

  return (
    <>
      <button
        className="bg-pedro-red-500 text-white p-2"
        onClick={() => {
          setPode(!pode);
        }}>
        CARREGAR
      </button>
      {typeof userList == 'object' && (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">Nome</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">CPF</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold">Idade</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 text-left text-sm uppercase font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: Users) => (
              <tr key={user.cpf} className="bg-pedro-blue-300/20 hover:bg-pedro-blue-300/40 transition-colors">
                <td className="py-3 px-4 border-b border-gray-200">{user.name}</td>
                <td className="py-3 px-4 border-b border-gray-200">{user.cpf}</td>
                <td className="py-3 px-4 border-b border-gray-200">{user.age}</td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <Link href={`/users/${user.user_id}`}>Ver Usuario</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {typeof userList == 'string' && <p>{userList}</p>}
    </>
  );
}
