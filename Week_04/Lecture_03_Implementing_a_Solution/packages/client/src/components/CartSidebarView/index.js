import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useUI } from "hooks";
import { useProvideCart, useRouter } from "hooks";
import { CartList, CartSummary, CheckoutBox } from "components";
import "./CartSidebarView.scss";
import axios from "utils/axiosConfig";
import { toast } from "react-toastify";

const CartSidebarView = () => {
  const { closeSidebar, displaySidebar } = useUI();
  const { state, applyCoupon } = useProvideCart();
  const { push } = useRouter();
  const [code, setCode] = useState("");

  const handleClose = () => closeSidebar();
  const handleCheckout = () => {
    closeSidebar();
    push("/checkout");
  };
  const handleCodeInputChange = (e) => setCode(e.target.value);
  const handleVerifyCoupon = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/coupons/verify", { params: { code } });
      applyCoupon(code, response.data);
      toast.success(
        "Coupon applied for a " + response.data * 100 + "% discount."
      );
      setCode("");
    } catch (error) {
      toast.error("Coupon could not be applied.");
    }
  };

  return (
    <div className="cart">
      <header className="cart-header">
        {displaySidebar && (
          <Button
            onClick={handleClose}
            aria-label="Close panel"
            className="hover:text-gray-500 transition ease-in-out duration-150"
          >
            <FontAwesomeIcon size="xs" icon={faTimes} />
          </Button>
        )}
      </header>

      {state.cart.length > 0 ? (
        <div className="cart-body">
          <CartList cartItems={state.cart} />
        </div>
      ) : (
        <div className="empty-cart">
          <FontAwesomeIcon size="xs" icon={faShoppingBag} />
          <p>Your shopping cart is empty</p>
        </div>
      )}

      {state.cart.length > 0 && (
        <div className="cart-checkout">
          <div>
            <Container>
              <Row>
                <Col>
                  {state.coupon ? (
                    <span>
                      {state.coupon.code.toUpperCase()} (
                      {state.coupon.discount * 100}% off)
                    </span>
                  ) : (
                    <Form onSubmit={handleVerifyCoupon}>
                      <Form.Group>
                        <Form.Control
                          placeholder="Coupon Code"
                          type="text"
                          name="code"
                          value={code}
                          onChange={handleCodeInputChange}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Button type="submit" variant="info">
                          Apply Coupon
                        </Button>
                      </Form.Group>
                    </Form>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
          <CartSummary coupon={state.coupon} cartTotal={state.cartTotal} />
          <CheckoutBox
            handleShopping={handleClose}
            handleCheckout={handleCheckout}
          />
        </div>
      )}
    </div>
  );
};

export default CartSidebarView;
