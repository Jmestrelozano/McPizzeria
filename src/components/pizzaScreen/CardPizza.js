import React from 'react';
import '../pizzaScreen/cardpizza.css';
export const CardPizza = ({ store }) => {
  return (
    <div style={{ height: '100%' }} className="col-lg-4 col-md-6 col-sm-12 ">
      <div className="card" style={{ width: '10rem' }}>
        <img src={store.logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6>{store.name}</h6>
          <p className="card-text">{store.address}</p>
        </div>
      </div>
    </div>
  );
};
