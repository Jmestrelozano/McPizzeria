import React from 'react';
import '../detailsScreen/carddetailpizza.css';
export const CardDetailPizza = ({ name, imagen }) => {
  return (
    <div className="card mb-3 cardDetail__Pizzeta">
      <div className="row no-gutters">
        <div className="col-lg-5 col-md-6">
          <img className="w-100 animate__animated animate__fadeInLeft" src={imagen} alt={name} />
        </div>
        <div className="col-lg-7 col-md-6 ">
          <div className="d-flex align-items-center p-3 h-100">
            <p className="card-text">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
