import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Assets/Styles/Layout/Header.scss'

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">The Mitti</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>

            <div className='dropdown'>
              <Nav.Link className='inner-nav'>Mother</Nav.Link>
              <div className='inner-nav-items'>
                <ul>
                  <li className='inner-dropdown'>
                    <Nav.Link className='inner-nav'>Mother1</Nav.Link>
                    <img className='img-fluid' src='https://www.lladro.com/media/wysiwyg/banners-menu/MD23_HERITAGE.jpg' />
                  </li>
                  <li className='inner-dropdown'>
                    <Nav.Link className='inner-nav'>Gifts</Nav.Link>
                    <img className='img-fluid' src='https://www.lladro.com/media/wysiwyg/banners-menu/MD23_GIFTS.jpg' />
                  </li>
                  <li className='inner-dropdown'>
                    <Nav.Link className='inner-nav'>Mother1</Nav.Link>
                    <img className='img-fluid' src='https://www.lladro.com/media/wysiwyg/banners-menu/MD23_HERITAGE.jpg' />
                  </li>
                </ul>
              </div>
            </div>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <NavDropdown title="User" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">My Account</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Create Account
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
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
      </Container>
    </Navbar>
  );
}
