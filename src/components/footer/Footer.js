import React from 'react';
import '../footer/footer.css';
export const Footer = () => {
  return (
    <footer
      className="container pt-3 d-flex justify-content-between footer"
      style={{ background: '#1f1f1f' }}
    >
      <nav>
        <ul style={{ width: '4rem' }} className="d-flex text-white text-center ">
          <li className="w-100">
            <i className="fab fa-facebook-square"></i>
          </li>
          <li className="w-100">
            <i className="fab fa-instagram"></i>
          </li>
        </ul>
      </nav>

      <img
        className="footer__imageLogo"
        src={process.env.PUBLIC_URL + '/assets/img/Best Pizza.png'}
      />
    </footer>
  );
};
