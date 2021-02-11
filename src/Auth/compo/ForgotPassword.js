import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap"; // Container having a CSS effect on the component that is not so good

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
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
        <Card className="card-pass">
          <Card.Body className="card-body-pass">
            <h2 id="pass-h2" className="text-center mb-4">
              PASSWORD <span className="pass-span">RESET</span>
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form className="form-pass" onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label className="pass-label"></Form.Label>
                <Form.Control
                  placeholder="JohnDoe@x*#.com"
                  className="pass-control"
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="btn w-100" type="submit">
                Reset Password
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link className="login-pass" to="/login">
                lOGIn
              </Link>
            </div>
          </Card.Body>
        </Card>
        <div id="pass-p" className="w-100 text-center mt-2">
          Need an account?{" "}
          <Link className="pass-need-account" to="/signup">
            Sign Up
          </Link>
        </div>
      </Container>
      <div className="forgot-p-flex-container">
        <p className="forgot-p">
          Back to{" "}
          <Link className="forgot-p-link" to="/">
            HOME
          </Link>
        </p>
      </div>
    </>
  );
}

// Temp Mail to reset password
