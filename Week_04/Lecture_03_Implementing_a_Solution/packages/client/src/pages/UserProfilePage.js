import { useEffect, useState } from "react";
import { getUserById } from "utils/axiosService";
import { Col, Container, Row } from "react-bootstrap";
import { LoadingSpinner, PastOrdersBox } from "components";

function UserProfilePage({
  match: {
    params: { uid },
  },
}) {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserById(uid);

      setUser(response.data);
    };

    fetchUser();
  }, [uid]);

  if (!user) {
    return (
      <Container>
        <LoadingSpinner full />
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col xs={12} lg={8}>
          <PastOrdersBox orders={user.orders} />
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfilePage;
