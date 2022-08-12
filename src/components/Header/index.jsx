// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import style from './style.module.scss';
import logo from '../../assets/img/Logo.svg';
import cart from '../../assets/img/cart.svg';
import search from '../../assets/img/search.svg';
import theme from '../../assets/img/theme.svg';

const Header = memo(() => {
  const links = ['男款', '女款', '最新消息', '客製商品', '聯絡我們'];
  const link = links.map((item) => {
    return (
      <li className={style.link} key={item}>
        <a href="/">{item}</a>
      </li>
    );
  });

  const icons = [search, cart, theme];
  const icon = icons.map((item) => {
    return (
      <a className={style.icon} href="/" key={item}>
        <img src={item} alt="" />
      </a>
    );
  });

  return (
    <header>
      <div className={style.itemGroup}>
        <ul>{link}</ul>
      </div>
      <div className={style.logo}>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={style.iconGroup}>{icon}</div>
    </header>
  );
});

export default Header;
