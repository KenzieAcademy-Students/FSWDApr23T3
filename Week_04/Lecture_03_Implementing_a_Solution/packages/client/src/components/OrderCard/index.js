import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./OrderCard.scss";

function OrderCard({ order }) {
  const [displayAllItems, setDisplayAllItems] = useState(false);

  console.log(order);

  let orderDate = new Date(order.createdAt);
  orderDate = orderDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Container as={Card} className="order-card" bg="light" text="dark">
      <Row as={Card.Body}>
        <Col xs={6}>
          <Card.Title>Order Placed</Card.Title>
          <Card.Text>{orderDate}</Card.Text>
          <Card.Title>Products Ordered</Card.Title>
          <Card.Text>
            <div
              className={`item-thumbnails ${
                order.items.length <= 3 ? "spacer" : ""
              }`}
            >
              {order.items &&
                order.items
                  .filter((_, i) => i < 3 || displayAllItems)
                  .map((item) => (
                    <img
                      className="order-item-thumbnail"
                      key={item._id}
                      src={`/${item.productImage}`}
                      alt={item.name}
                    />
                  ))}
            </div>
            {order.items.length > 3 && (
              <span
                className="toggle-display-thumbnails"
                onClick={() => setDisplayAllItems(!displayAllItems)}
              >
                {displayAllItems
                  ? "... collapse"
                  : `... and ${order.items.length - 3} more`}
              </span>
            )}
          </Card.Text>
        </Col>
        <Col xs={3}>
          <Card.Title>Total</Card.Title>
          <Card.Text>${order.orderTotal.toFixed(2)}</Card.Text>
          <Card.Title>Order Status</Card.Title>
          <Card.Text>{order.status}</Card.Text>
        </Col>
        <Col xs={3}>
          <Card.Title>Ship To</Card.Title>
          <Card.Text style={{ display: "flex", flexDirection: "column" }}>
            <span>{order.customerName}</span>
            <span>{order.customerAddress1}</span>
            {order.customerAddress2 && <span>{order.customerAddress2}</span>}
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderCard;
