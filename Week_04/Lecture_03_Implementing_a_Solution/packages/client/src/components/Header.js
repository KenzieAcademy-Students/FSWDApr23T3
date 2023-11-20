import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Badge, Form, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { useUI, useProvideCart } from "hooks";
import CartSidebar from "components/CartSidebar";
import useCurrency from "hooks/useCurrency";
import useAuth from "hooks/useAuth";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const { openSidebar } = useUI();
  const { state } = useProvideCart();
  const { currency, toggleCurrency } = useCurrency();
  const { auth, signOut } = useAuth();

  return (
    <>
      <CartSidebar />
      <Navbar expand="lg" style={{ backgroundColor: "#1D3868" }}>
        <Navbar.Brand>
          <LinkContainer to={"/"}>
            <Nav.Link>
              <img src="/logo.png" alt="logo" width="142px" />
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5" style={{ justifyContent: "center" }}>
            <LinkContainer
              className="d-flex align-items-center"
              to={`/`}
              style={{ color: "white", marginRight: "20px" }}
            >
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <Form.Group className="mt-3 mr-3 d-flex gap-2 justify-content-center align-items-center">
              <Form.Label style={{ color: "white" }} className="mr-2" as="span">
                $
              </Form.Label>
              <Form.Switch
                id="currency-toggle"
                checked={currency.symbol === "€"}
                onChange={toggleCurrency}
              />
              <Form.Label style={{ color: "white" }} as="span">
                €
              </Form.Label>
            </Form.Group>
            <div
              className="d-flex align-items-center ml-1"
              onClick={openSidebar}
              style={{ color: "white", cursor: "pointer", marginRight: "20px" }}
            >
              Cart
              <FontAwesomeIcon
                className="ml-2 mb-1"
                icon={faShoppingBag}
                style={{ color: "white" }}
              />
              {state.itemCount > 0 && (
                <Badge pill variant="primary" className="mb-4 mr-2">
                  <p className="mb-0">{state.itemCount}</p>
                </Badge>
              )}
            </div>
            {auth.isAuthenticated ? (
              <NavDropdown className="user-dropdown" title={auth.user.email}>
                <NavDropdown.Item as={Link} to={`/user/${auth.user.id}`}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOut}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer
                className="d-flex align-items-center"
                to={`/signin`}
                style={{ color: "white", marginRight: "20px" }}
              >
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
