import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Alerts } from '../../alerts/alerts';
import firebase, { fireConfig } from '../../config/firebaseConfig';

import { authContext, messageContext } from '../../hooks/UseContext';
import { useForm } from '../../hooks/UseForm';
import { types } from '../../types/type';
import '../login/login.css';

export const Login = () => {
  const [hideShow, setHideShow] = useState(false);
  const [login, handleOnchange] = useForm({
    usuario: '',
    contraseña: '',
  });

  const { usuario, contraseña } = login;
  const history = useHistory();
  const { dispatch } = useContext(authContext);
  const { message, setMessage } = useContext(messageContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario !== '' && contraseña !== '') {
      fireConfig
        .auth()
        .signInWithEmailAndPassword(usuario, contraseña)
        .then((result) => {
          console.log(result);
          dispatch({ type: types.login, payload: { usuario: 'jorge', contraseña: '12345' } });
          history.replace('/');
          setHideShow(true);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setHideShow(true);
      setMessage('No puede haber campos vacios');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setHideShow(false);
    }, 3000);

    console.log(fireConfig.auth().currentUser);
  }, [hideShow]);

  return (
    <>
      {hideShow && <Alerts typeNotify="danger" msgError={message} />}
      <div className="container contenedor__Card animate__animated animate__fadeInDown">
        <img
          className="d-flex w-50 m-0-auto pt-4"
          src={process.env.PUBLIC_URL + '/assets/img/logo_1.png'}
        />

        <div className="text-center mt-4">
          <h1>Bienvenido</h1>
          <p>A las mejores pizzas del pais</p>
        </div>

        <form>
          <div className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                name="usuario"
                value={usuario}
                onChange={handleOnchange}
                className="form-control border-right-0"
                placeholder="usuario"
                aria-label="Amount (to the nearest dollar)"
              />
              <div className="content__icon input-group-append">
                <span className="content__icon input-group-text">
                  <img
                    className="w-50 m-0-auto"
                    src={process.env.PUBLIC_URL + '/assets/img/ic_usuario.png'}
                  />
                </span>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                name="contraseña"
                value={contraseña}
                onChange={handleOnchange}
                className="form-control border-right-0"
                placeholder="contraseña"
                aria-label="Amount (to the nearest dollar)"
              />
              <div className="input-group-append">
                <span className="content__icon input-group-text">
                  <img
                    className="w-50 m-0-auto"
                    src={process.env.PUBLIC_URL + '/assets/img/ic_password.png'}
                  />
                </span>
              </div>
            </div>
          </div>
        </form>

        <p className="text-center">¿Olvidastes tu contraseña?</p>

        <button onClick={handleSubmit} className="btn btn__login font-weight-bold mb-2">
          Iniciar sesion
        </button>
      </div>
    </>
  );
};
