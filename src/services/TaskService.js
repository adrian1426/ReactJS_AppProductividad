import { limitDefault, skipDefault } from "../constants/FilterConstants";

const api = process.env.REACT_APP_API_PRODUCTIVIDAD;

export const getTasksByUserId = async (userId, query) => {
  const { titulo, idStatus, idTiempo, limit = limitDefault, skip = skipDefault } = query;

  try {
    const response = await fetch(
      `${api}/tarea/${userId}?titulo=${titulo}&idStatus=${idStatus}&idTiempo=${idTiempo}&limit=${limit}&skip=${skip}`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const addTarea = async (tarea) => {
  try {
    const response = await fetch(
      `${api}/tarea`,
      {
        method: 'POST',
        body: JSON.stringify(tarea),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};