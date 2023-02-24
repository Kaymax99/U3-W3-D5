import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/Spotify_Logo.png";

export const SidebarLeft = () => {
  return (
    <div className="col-2">
      <Navbar
        expand="md"
        bg="bg-navbar"
        fixed="left"
        className="justify-content-between navbar-white"
        id="sidebar"
      >
        <div className="nav-container">
          <Navbar.Brand>
            <Link to={"/"}>
              <img src={logo} alt="Spotify_Logo" width="131" height="40" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav>
              <ul>
                <li>
                  <Link to={"/"} className="nav-item nav-link">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <a className="nav-item nav-link" href="/">
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                    Library
                  </a>
                </li>
                <li>
                  <Form className="input-group mt-3">
                    <Form.Control
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div
                      className="input-group-append"
                      style={{ marginBottom: "4%" }}
                    >
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        id="button-addon1"
                        // onClick=
                      >
                        GO
                      </Button>
                    </div>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <Link to={"/"}>Cookie Policy</Link> | <Link to={"/"}> Privacy</Link>
        </div>
      </Navbar>
    </div>
  );
};
