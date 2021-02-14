import axios from 'axios';

export const loginUserService = async(request) => {
  const LOGIN_API_ENDPOINT = 'https://60284554dd4afd001754b28e.mockapi.io/api/v1/users';
  return await axios.get(LOGIN_API_ENDPOINT).then(response => response.data);
};