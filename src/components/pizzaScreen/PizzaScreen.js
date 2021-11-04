import React, { useContext } from 'react';
import { Pizza } from '../../api/pizzaJson';
import { authContext } from '../../hooks/UseContext';
import { types } from '../../types/type';
import { CardPizza } from './CardPizza';
import '../pizzaScreen/pizzascreen.css';
import { Footer } from '../footer/Footer';
export const PizzaScreen = () => {
  const { state, dispatch } = useContext(authContext);

  const { usuario, contraseña, login } = state.inicioSesion;
  const handleLogout = () => {
    dispatch({ type: types.loggout, payload: { usuario, contraseña, login: !login } });
  };
  return (
    <div>
      <div className="container pizzaScreen">
        <div className="d-flex justify-content-end">
          <button className="d-flex align-items-end btn" onClick={handleLogout}>
            <img
              className="w-50 m-0-auto"
              src={process.env.PUBLIC_URL + '/assets/img/ic_password.png'}
            />
            Salir
          </button>
        </div>
        <h5>Pizzerias</h5>

        <h3>Tiendas</h3>
        <p>Escoge tu pizzeria favorita</p>
        <div className="scroll__view">
          <div className="row">
            {Pizza.response.stores.map((store) => {
              return <CardPizza key={store.id} store={store} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
