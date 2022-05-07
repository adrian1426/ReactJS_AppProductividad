export const initialState = {
  title: '',
  description: '',
  time: 0
};

export const initialStateErr = {
  title: false,
  description: false,
  time: false
};

export const _objTarea = (tarea, state) => {
  return {
    titulo: tarea.title,
    descripcion: tarea.description,
    estatus: {
      id: 1,
      descripcion: 'Programado'
    },
    tiempo: {
      programado: tarea.time * 60,
      transcurrido: 0,
      actual: 0
    },
    usuario: state._id
  }
};

export const _objTareaEdit = (tarea, tareaPrev) => {
  return {
    descripcion: tarea.description,
    estatus: tareaPrev.estatus,
    tiempo: {
      ...tareaPrev.tiempo,
      programado: tarea.time * 60
    }
  }

};