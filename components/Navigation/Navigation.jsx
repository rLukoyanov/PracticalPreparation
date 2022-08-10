import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { HamburgerSlider } from 'react-animated-burgers';

import authContext from '../../store/auth-context';

import homeSVG from '../../public/images/Navigation/home.svg';
import eventsSVG from '../../public/images/Navigation/events.svg';
import profileSVG from '../../public/images/Navigation/profile.svg';
import exitSVG from '../../public/images/Navigation/exit.svg';
import vcansiesSVG from '../../public/images/Navigation/vacansies.svg';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const { onLogout } = useContext(authContext);
  const router = useRouter();
  const [burger, setBurger] = useState(false);
  const redirect = (url) => {
    router.push(url);
    setBurger(false);
  };

  const PAGES = [
    {
      img: homeSVG,
      name: 'Главная',
      url: '/',
      onСlick: redirect,
      active: false,
    },
    {
      img: eventsSVG,
      name: 'Отклики',
      url: '/response',
      onСlick: redirect,
      active: false,
    },
    {
      img: vcansiesSVG,
      name: 'Вакансии',
      url: '/vacancies',
      onСlick: redirect,
      active: false,
    },
    {
      img: profileSVG,
      name: 'Профиль',
      url: '/profile',
      onСlick: redirect,
      active: false,
    },
    {
      img: exitSVG,
      name: 'Выход',
      url: '/exit',
      onСlick: onLogout,
      active: false,
    },
  ];

  PAGES.forEach((item) => {
    if (router.pathname === item.url) {
      item.active = true;
    }
  });

  return (
    <div className={styles.navBar}>
      <HamburgerSlider
        isActive={burger}
        toggleButton={() => setBurger(!burger)}
        className={styles.burger}
      />
      <div className={`${styles.navigation} ${burger ? styles.activeNav : ''}`}>
        {PAGES.map((menuItem) => (
          <button
            type="button"
            onClick={() => menuItem.onСlick(menuItem.url)}
            key={menuItem.name}
            className={menuItem.active ? styles.active : ''}
          >
            <menuItem.img />
            <span>{menuItem.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
