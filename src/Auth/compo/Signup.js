import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import firebase from 'firebase/app';
const db = firebase.firestore();

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const nameRef = useRef()
  
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();

  /*

  const db = firebase.firestore();

  function signup(email, password) {
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      name: signup['signup-name'].value
    });
  }).then(() => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signup.reset();
    
  */

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/newgallery");
    } catch {
      setError("Failed to create an account");
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
        <Card className="card-signup">
          {" "}
          {/*contains all the login info*/}
          <Card.Body className="card-body-signup">
            <h2 className="text-center mb-4">
              SigN <span class="signup-span">Up</span>
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="form-signup" onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label className="signup-label">Email</Form.Label>
                <Form.Control
                  id="signup-email"
                  className="signup-control"
                  type="email"
                  placeholder="JohnDoe@x*#.com"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label className="signup-group-signup"></Form.Label>
                <Form.Control
                  id="signup-password-control"
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="password"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="password confirmation"
                  required
                />
              </Form.Group>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="name" 
                  ref={nameRef}
                  placeholder="Surname Name"
                  required 
                />
              </Form.Group>
              <Button disabled={loading} className="btn w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account?{" "}
          <Link className="signup-already-have" to="/login">
            Log In
          </Link>
        </div>
      </Container>
      <div className="signup-p-flex-container">
        <p className="signup-p">
          Back to{" "}
          <Link className="signup-p-link" to="/">
            HOME
          </Link>
        </p>
      </div>
    </>
  );
}

/*
// signup
const signup = document.querySelector('#signup-form');
signupForm.addEventListener('Sign Up', (e) => {
e.preventDefault();

  // get user info
const email = signupForm['signup-email'].value;
const password = signupForm['signup-password'].value;
*/