import React, { useReducer, useState } from 'react';
import { AuthReducer } from './auth/authReducer';
import { authContext, messageContext } from './hooks/UseContext';
import { RoutePrincipal } from './routes/RoutePrincipal';

const McPizzeria = () => {
  const initialState = {
    inicioSesion: {
      usuario: 'jorge',
      contraseña: '12345',
      login: false,
    },
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const [message, setMessage] = useState('');
  return (
    <>
      <authContext.Provider value={{ state, dispatch }}>
        <messageContext.Provider value={{ message, setMessage }}>
          <RoutePrincipal />
        </messageContext.Provider>
      </authContext.Provider>
    </>
  );
};

export default McPizzeria;
