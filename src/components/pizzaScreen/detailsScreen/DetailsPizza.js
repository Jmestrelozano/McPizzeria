import React from 'react';

import { useHistory, useLocation } from 'react-router';
import { CardDetailPizza } from './CardDetailPizza';
import { getPizzaDetail } from '../../../api/getPizzaDetail';
import Tilt from 'react-parallax-tilt';
import '../detailsScreen/detailspizza.css';

export const DetailsPizza = () => {
  const { pathname } = useLocation();
  const namePizza = pathname.split('/')[2];
  const history = useHistory();
  const { logo, name, address, description, products } = getPizzaDetail(namePizza)[0];
  return (
    <div className="container contenedor__Card  ">
      <button onClick={() => history.goBack()} className="btn ">
        <i className="fas fa-arrow-left"></i>
      </button>

      <div style={{ height: '55vh' }} className="position-relative d-flex justify-content-center ">
        <Tilt style={{ position: 'absolute' }}>
          <div
            class="card shadow-lg p-3 mb-5 bg-white rounded card__Pizzeta m-auto"
            style={{ width: '14rem' }}
          >
            <div className="contendor__SuperiorPizzeta text-center rounded-circle d-flex flex-column align-self-center">
              <img className="img__Pizzeta" src={logo} alt="Not Found" />
              <h5>{name}</h5>
              <p>{address}</p>
            </div>
            <div className="card-body">
              <p className="card-text textoBody__Pizzeta text-center">{description}</p>
            </div>

            <nav>
              <ul className="d-flex justify-content-center">
                <li className="mr-2">
                  <i className="fab fa-instagram"></i>
                </li>
                <li className="ml-2">
                  <i className="fab fa-facebook-square"></i>
                </li>
              </ul>
            </nav>
          </div>
        </Tilt>
      </div>
      <div className="contenedor__DetailsPizzeta d-flex flex-wrap justify-content-between ">
        {products.map(({ id, img, name }) => {
          return <CardDetailPizza key={id} name={name} imagen={img} />;
        })}
      </div>
    </div>
  );
};
