import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import './index.css';

const Header = () => {
    return (
    <>
      <Navbar  expand="md" className="custom-navbar cla">
        <Container >
          <Navbar.Brand href="/">
            <div className="logo-container">
              <img
                src="https://res.cloudinary.com/dss6kupcu/image/upload/v1772702130/Logo_vxwhsl.png"
                alt="Prajitha Reddy Rice Stores"
                className='image-container'
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="nav-links">
              <Nav.Link className="custom-nav-link" href="/">Home</Nav.Link>
              <Nav.Link className="custom-nav-link" href="about">AboutUs</Nav.Link>
              <Nav.Link className="custom-nav-link" href="types-of-rice">Rice Types</Nav.Link>
              <Nav.Link className="custom-nav-link" href="manufacture-process">Manufacture Process</Nav.Link>
              <Nav.Link className="custom-nav-link" href="contact">Contact</Nav.Link>
              {/* <Nav.Link className="custom-link-1" href="/login" onClick={()=>{Cookies.remove("auth_token")}}>Logout</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header
