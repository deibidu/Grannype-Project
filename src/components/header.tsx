import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/Logo_Grannype.svg';
import UserIconCreamy from '../assets/images/profile_icon__creamy.svg';
import '../sass/headers.scss';
import '../sass/fonts.scss';

export const Header = () => {
  return (
    <div>
      <div className="common-header">
        <div className="logo-container">
          <img src={LogoImage} alt="Logo" className="logo"></img>
        </div>
        <div className="user-container">
          <Link to="/User">
            <p className="font-title">Bienvenido, David</p>
            <img src={UserIconCreamy} alt="Ícono de Usuario" className="user-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;