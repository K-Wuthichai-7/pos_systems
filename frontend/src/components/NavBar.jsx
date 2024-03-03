import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from './SignInButton';

import { Account } from './Account';


function NavBar() {
  const isAuthenticated = useIsAuthenticated();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow py-3">
      <Container fluid className='d-flex' >
        <Navbar.Brand >
          <Link to='/' className='nav-link fw-bold' >Health<sup className='text-primary' style={{fontSize:'24px'}}>+</sup></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll"  className='px-5' />
        
        <Navbar.Collapse id="navbarScroll" className='ps-5'>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            
          </Form>
        </Navbar.Collapse>
        
        <Link to="/Report" className="me-2 nav-link"><code className='text-danger'>รายงานยอดขาย</code></Link>
    {isAuthenticated ?    
      <div className='cart me-3'>
        <Link to="/cart">
        <div className="nav-bag">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
        </Link>
      </div>
    : null}
    {isAuthenticated ? <Account />  :<SignInButton/> }
    
      </Container>
    </Navbar>
  );
}

export default NavBar;
