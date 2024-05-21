import axios from 'axios';
import { URL_BACKEND } from '../utils/constants';
import { ApiReturn } from 'UtilsTypes';

export async function getUsers(): Promise<ApiReturn> {
  try {
    const response = await axios.get(`${URL_BACKEND}/users`);
    const userList = response.data;

    return {
      return: 'success',
      data: userList,
      message: 'Sucesso no retorno',
    };
  } catch (error: any) {
    return {
      return: 'error',
      message: 'Não foi possivel realizar a busca',
    };
  }
}
