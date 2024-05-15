import { URL_BACKEND } from '@/lib/utils/constants';
import { Users } from 'UsersTypes';
import axios from 'axios';

export default async function ListUsers() {
  const users = await axios({
    method: 'get',
    url: `${URL_BACKEND}/users`,
    data: {},
  });

  const userList = users.data;

  return (
    <>
      {userList.map((user: Users) => {
        return (
          <div className="bg-pedro-red-300/60 py-4 mb-2">
            <p className="bg-pedro-red-300/20 text-pedro-blue-300">
              Nome: {user.name} / CPF: {user.cpf} / Idade: {user.age}
            </p>
          </div>
        );
      })}
    </>
  );
}
