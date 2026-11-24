import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

export default function Navbar() {
  return (
    <BootstrapNavbar expand="lg" bg="light" variant="light">
      <Container fluid>
        <BootstrapNavbar.Brand href="/">
          NextStep Career Solutions
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="primary-navbar-nav"
          aria-label="Toggle navigation"
        />
        <BootstrapNavbar.Collapse id="primary-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Packages</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
