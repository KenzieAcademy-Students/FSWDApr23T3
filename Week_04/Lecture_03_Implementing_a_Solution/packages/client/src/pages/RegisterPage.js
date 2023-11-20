import useAuth from "hooks/useAuth";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRouter } from "hooks";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

function RegisterPage() {
  const [formData, setFormData] = useState(initialState);
  const { signUp } = useAuth();
  const [errorData, setErrorData] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;
    setErrorData("");
    try {
      await signUp(email, password, confirmPassword);
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
      <h1>Sign Up</h1>
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
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Button type="submit" variant="primary">
            Create Account
          </Button>
        </Form.Group>
        <Form.Text>
          Already have an account? <Link to="/signin">Sign In</Link>
        </Form.Text>
      </Form>
    </Container>
  );
}

export default RegisterPage;
