import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logoutUser();
    clearContacts();
  }

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!"><i className="fas fa-sign-out-alt"></i>
        <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>  
        <Link to="/"><i className="fas fa-id-card-alt"></i> Contact Keeper</Link>
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  )
}


export default Navbar
