import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import {} from "react-bootstrap"

const MyNavbar = (props) => (
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">{props.brandName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Browse" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Comics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Computing & Internet
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Education</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Second Hand
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

export default MyNavbar