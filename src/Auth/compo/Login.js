import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap"; // Container having a CSS effect on the component that is not so good

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/newgallery");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "110vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}></div>
        <Card className="card-login">
          <Card.Body className="card-body-login">
            <h2 id="login-h2" className="text-center mb-4">
              Log <span className="login-span">In</span>
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="form-login" onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label className="login-label">Email</Form.Label>
                <Form.Control
                  className="login-control"
                  type="email"
                  ref={emailRef}
                  placeholder="JohnDoe@x*#.com"
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label className="login-group-login"></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="btn w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="btn w-100 text-center mt-3">
              <Link className="login-forgot" to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account?{" "}
          <Link className="login-link" to="/signup">
            Sign Up
          </Link>
        </div>
      </Container>
      <div className="login-p-flex-container">
        <p className="login-p">
          Back to{" "}
          <Link className="login-p-link" to="/">
            HOME
          </Link>
        </p>
      </div>
    </>
  );
}
