import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRouter } from "hooks";
import useAuth from "hooks/useAuth";

const initialState = {
  email: "",
  password: "",
};

function LoginPage() {
  const [formData, setFormData] = useState(initialState);
  const { signIn } = useAuth();
  const [errorData, setErrorData] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    setErrorData("");
    try {
      await signIn(email, password);
      push("/");
    } catch (error) {
      if (error?.data?.error) setErrorData(error.data.error);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "25px",
      }}
    >
      <h1>Sign In</h1>
      <Form
        style={{ width: "100%", maxWidth: "400px" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            autoComplete="off"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form.Group>
        <Form.Text>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Form.Text>
      </Form>
    </Container>
  );
}

export default LoginPage;
