// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.scss';
import logo from '../../assets/img/Logo.svg';
import cart from '../../assets/img/cart.svg';
import search from '../../assets/img/search.svg';
import theme from '../../assets/img/theme.svg';

export const Header = () => {
  const links = ['男款', '女款', '最新消息', '客製商品', '聯絡我們'];
  const link = links.map((item) => {
    return (
      <li className="link" key={item}>
        <a href="/">{item}</a>
      </li>
    );
  });

  const icons = [search, cart, theme];
  const icon = icons.map((item) => {
    return (
      <a className="icon" href="/" key={item}>
        <img src={item} alt="" />
      </a>
    );
  });

  return (
    <header>
      <div className="itemGroup">
        <ul>{link}</ul>
      </div>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="iconGroup">{icon}</div>
    </header>
  );
};
