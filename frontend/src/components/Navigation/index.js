// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
        <>
            <LoginFormModal />
            <NavLink className="signup-nav-button" to="/signup">
                Sign Up
            </NavLink>
        </>
    );
  }

  return (
    <ul className="Nav-main-container">
      <li className="nav-li-index-container">
        <NavLink className="home-navlink" exact to="/home">Memory Snap</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;