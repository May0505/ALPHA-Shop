// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import './footer.scss';
import logo from '../../assets/img/Logo.svg';

const Footer = memo(() => {
  return (
    <footer>
      <img src={logo} alt="" />
    </footer>
  );
});

export default Footer;
