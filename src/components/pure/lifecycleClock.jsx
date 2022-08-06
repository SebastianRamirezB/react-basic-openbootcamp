import React, { useState, useEffect } from 'react';

const LifecycleClock = () => {

  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Sebastian',
    apellidos: 'Ramirez'
  }
  
  const [state, setState] = useState(initialState);

  function tick(){
    setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha : new Date(),
        edad
      }
    });
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

     return () => {
       clearInterval(timerID);
     };
   }, []);




  return (
    <div>
      <h2>Hora Actual: {state.fecha.toLocaleDateString()}</h2>
      <h3>{state.nombre} {state.apellidos}</h3>
      <h1>Edad : {state.edad}</h1>
    </div>
  )
}

export default LifecycleClock;