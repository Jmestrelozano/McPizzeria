import React from 'react';

export const Alerts = ({ typeNotify, msgError }) => {
  return (
    <div
      className={`alert alert-${typeNotify} alert-dismissible fade show position-absolute fixed-bottom`}
      role="alert"
    >
      <strong>{msgError}</strong>
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
