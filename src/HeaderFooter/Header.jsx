import React, { useEffect } from 'react';
import '../HeaderFooter/Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../SIgn In/Login';
import useFirebase from '../Firebase/useFirebase';
import Logout from '../SIgn In/Logout';
import Register from '../SIgn In/Register';
const Header = () => {
  const { user } = useFirebase();
  const [navbar, setNavbar] = useState(false);
  const stickyNav = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', stickyNav);

  // _____________

  return (
    <div className="w-100 header">
      {/*_______________ Navbar_________________ */}
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="nav__logo">
          <Link to="/">
            <img src="./image/tgl2.png" alt="logo" />
          </Link>
        </div>
        <div>
          <input type="search" name="" id="" />
        </div>
        <div className="hdr__link">
          <Link to="/">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Residence</Link>
          <Link to="/">Contact</Link>
          <Register />
          {user.email ? <Logout /> : <Login />}
        </div>
      </nav>
    </div>
  );
};

export default Header;
