import React from 'react';
import logo from '../assets/faso_logo_cropped.jpg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/app_context';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')
    || e.target.classList.contains('no-sublinks')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <Link to='/' className='link-btn btn no-sublinks' onMouseOver={handleSubmenu} >
              accueil
            </Link>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu} onClick={displaySubmenu}>
              membres
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu} onClick={displaySubmenu}>
              crédits
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu} onClick={displaySubmenu}>
              epargnes
            </button>
          </li>
          <li>
            <Link to='/contacts' className='link-btn btn no-sublinks' onMouseOver={handleSubmenu}>
              contacts
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
