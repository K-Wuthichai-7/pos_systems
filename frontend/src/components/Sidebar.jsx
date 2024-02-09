import '../css/sidebar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';

export const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-body-tertiary"
      style={{ width: "7rem",height:'100vh' }}
    >
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li  className="bg-body-tertiary py-4">
        <i className="bi bi-house-door" style={{fontSize:'24px'}}></i>
          <Link
            to={'/'}
            className="nav-link text-black "
          >
           <h6 className="menu-bar">HOME</h6>
          </Link>
        </li>
        <li  className="bg-body-tertiary  py-4">
        <i className="bi bi-list" style={{fontSize:'24px'}}></i>
          <Link
            to="#"
            className="nav-link text-black "
          >
           <h6 className="menu-bar">MENU</h6>
          </Link>
        </li>
        <li className="bg-body-tertiary  py-4">
        <i className="bi bi-credit-card"  style={{fontSize:'24px'}}></i>
          <Link
            to="#"
            className="nav-link text-black "
          >
           <h6 className="menu-bar">PAYMENT</h6>
          </Link>
        </li>
        <li className="bg-body-tertiary  py-4">
        <i className="bi bi-border-all" style={{fontSize:'24px'}}></i>
          <Link
            to={'/cart'}
            className="nav-link text-black "                   
          >
           <h6 className="menu-bar">ORDERS</h6>
          </Link>
        </li>
        <li className="bg-body-tertiary  py-4">
        <i className="bi bi-gear" style={{fontSize:'24px'}}></i>
          <Link
            to="#"
            className="nav-link text-black "                   
          >
           <h6 className="menu-bar">SETTINGS</h6>
          </Link>
        </li>
      </ul>
    </div>
  );
};
