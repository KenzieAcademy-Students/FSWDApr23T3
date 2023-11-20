import useCurrency from "hooks/useCurrency";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function CartSummary({ coupon, cartTotal }) {
  const { getPrice } = useCurrency();
  console.log(coupon);

  return (
    <div className="cart-summary">
      <Container>
        <Row className="mb-2 summary-item">
          <Col xs="9">
            <p className="summary-label">Free Shipping</p>
          </Col>
          <Col xs="3" className="text-right">
            <p className="summary-value">{getPrice(0)}</p>
          </Col>
        </Row>
        <Row className="mb-2 summary-item">
          <Col xs="9">
            <p className="summary-label">Total</p>
          </Col>
          <Col xs="3" className="text-right">
            <p className="summary-value">
              {getPrice(cartTotal * (coupon ? 1 - coupon.discount : 1))}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
