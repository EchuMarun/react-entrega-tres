import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };

  return (
    <nav className={style.NavBar}>
      <ul className={`${style.game} ${isOpen ? style.open : ''}`}>
        <li className={style.li}>
          <NavLink to="/" end className={style.ActiveOptions}>  Inicio
          </NavLink>
        </li>
        <li className={style.li}>
          <button onClick={toggleSubMenu} className={style.subMenuButton}>Productos</button>
          <ul className={`${style.subMenu} ${isSubMenuOpen ? style.open : ''}`}>
            <li className={style.li}>
              <NavLink to="/category/pc" className={style.ActiveOption} onClick={closeSubMenu}>
                PC
              </NavLink>
            </li>
            <li className={style.li}>
              <NavLink to="/category/xbox" className={style.ActiveOption} onClick={closeSubMenu}>
                Xbox
              </NavLink>
            </li>
            <li className={style.li}>
              <NavLink to="/category/ps5" className={style.ActiveOption} onClick={closeSubMenu}>
                Ps5
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <div id="carrito" className="carrito">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar; 