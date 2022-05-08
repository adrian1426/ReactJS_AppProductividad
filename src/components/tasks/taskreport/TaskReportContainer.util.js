export const trasnformData = (data) => {
  const programado = data.filter(d => d.estatus.id === 1).length;
  const proceso = data.filter(d => d.estatus.id === 2).length;
  const finalizado = data.filter(d => d.estatus.id === 3).length;

  const newData = [
    { title: 'Programado', value: programado },
    { title: 'En Proceso', value: proceso },
    { title: 'Finalizado', value: finalizado }
  ];

  return newData;
};