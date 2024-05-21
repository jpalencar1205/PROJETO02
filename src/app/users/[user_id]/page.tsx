import { getUsers } from '@/lib/users/getUser';

type UserData = {
  params: {
    user_id: number;
  };
};

export default async function PageUser(props: UserData) {
  const user_id = props.params.user_id;
  const users = await getUsers()
    .then((response: any) => {
      if (response.return == 'error') {
        throw new Error(response.message);
      }

      return response.data;
    })
    .catch((error: any) => {
      return error.message;
      
    });

  const res = users.filter((user: any) => {
    return user.user_id === Number(user_id);
  })[0];

  console.log(res);

  return (
    <div>
      <center>
        <p>O Id do Usuario é: {user_id}</p>
      </center>
      <center>
        <p>{res.name}</p>
      </center>
      <center>
        <p>Ele possui {res.age} anos</p>
      </center>
      <center>
        <p>CPF: {res.cpf}</p>
      </center>
    </div>
  );
}
