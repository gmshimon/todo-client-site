import React from "react";
import auth from "../../firebase.init";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import "./Head.css";
const Head = () => {
  const [user, loading, error] = useAuthState(auth);
  const hehe = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid" : "",
    };
  };

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar bg="danger" expand="lg" className="nav-bar">
        <Container>
          <Nav>
            <NavLink
              className="text-white nav-link fs-5 me-5"
              as={Link}
              to="/home"
            >
              Jom Tapau
            </NavLink>
          </Nav>

          <Navbar.Toggle
            style={{ color: "white" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center">
              <NavLink
                // style={hehe}
                className="text-white nav-link fs-5"
                as={Link}
                to="/menu"
              >
                
              </NavLink>
              <NavLink
                // style={hehe}
                className="text-white nav-link fs-5"
                as={Link}
                to="/about"
              >
                
              </NavLink>
            </Nav>
            <Nav className="nav-container">
              {user ? (
                <div className="d-flex align-items-center ms-4">
                  <NavLink
                    // style={hehe}
                    onClick={handleSignOut}
                    className="text-white nav-link fs-5"
                    as={Link}
                    to="/login"
                  >
                    Sign out
                  </NavLink>
                </div>
              ) : (
                <NavLink
                  //   style={hehe}
                  className="text-white nav-link fs-5 "
                  as={Link}
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Head;
