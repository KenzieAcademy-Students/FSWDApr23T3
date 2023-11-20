import { Container } from "react-bootstrap";
import OrderCard from "../OrderCard";
import "./PastOrders.scss";

function PastOrdersBox({ orders }) {
  return (
    <Container>
      <h2>Past Orders</h2>
      <Container className="past-orders">
        {orders &&
          orders.map((order) => <OrderCard key={order._id} order={order} />)}
      </Container>
    </Container>
  );
}

export default PastOrdersBox;
