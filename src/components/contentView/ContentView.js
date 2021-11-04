import React from 'react';
import '../contentView/contentview.css';

export const ContentView = ({ children }) => {
  return (
    <div>
      <div className="row mr-0">
        <div className="overflow-hidden col-sm-12 col-md-6 col-lg-6 pr-0">
          <img
            className="w-100 contentView__image"
            src={process.env.PUBLIC_URL + `/assets/img/imagebkg.png`}
            alt="Not Found"
          />
          <div className="position-absolute fixed-top">
            <img
              className=" w-100 image__pizza"
              src={process.env.PUBLIC_URL + '/assets/img/Pizza.png'}
            />
          </div>
        </div>
        <div className="contenedor__login col-sm-12 col-md-6 col-lg-6 pr-0">{children}</div>
      </div>
    </div>
  );
};
