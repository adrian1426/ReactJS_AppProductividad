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

export const updateTareaById = async (id, tarea) => {
  try {
    const response = await fetch(
      `${api}/tarea/${id}`,
      {
        method: 'PUT',
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

export const deleteTareaById = async (id) => {
  try {
    const response = await fetch(
      `${api}/tarea/${id}`,
      { method: 'DELETE' }
    );

    return response;
  } catch (error) {
    return error;
  }
};