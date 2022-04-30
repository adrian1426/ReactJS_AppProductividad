const api = process.env.REACT_APP_API_PRODUCTIVIDAD;

export const getUsers = async () => {
  try {
    const response = await fetch(`${api}/usuario`);
    return response;
  } catch (error) {
    return error;
  }
};