import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          style={{ color: "black", backgroundColor: "white" }}
          expand={expand}
        >
          <Container
            fluid
            className=""
            style={{ marginLeft: "40px", marginRight: "40px" }}
          >
            <p href="#" className="font">
              mentors
            </p>

            {/* <Navbar.Brand href="#" className="font">
              Mentors
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="text-dark">
                    Find a mentor
                  </Nav.Link>
                  <Nav.Link href="#action2" className="text-dark">
                    Take a Course
                  </Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}{" "}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                <Button
                  variant="outline-dark"
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    marginRight: "20px",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="dark"
                  style={{
                    borderRadius: "10px",
                    width: "80px",
                    // marginRight: "20px",
                  }}
                >
                  Sign-Up
                </Button>{" "}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
