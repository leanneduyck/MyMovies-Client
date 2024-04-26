import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignupView = () => {
  // state variables
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    // prevents default reloading entire page
    event.preventDefault();

    const data = {
      Username: username,
      Birthday: birthday,
      Email: email,
      Password: password,
    };
    // connects to API user signup endpoint
    fetch("https://my---movies-868565568c2a.herokuapp.com/users/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("You're signed up!");
        window.location.reload();
      } else {
        alert("Sorry, signup failed.");
      }
    });
  };

  return (
    <Form className="m-3" onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="5"
        />
      </Form.Group>
      <Form.Group contolId="formBirthday">
        <Form.Label>Birthday:</Form.Label>
        <Form.Control
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          maxLength="20"
        />
      </Form.Group>
      <Button className="m-3" variant="secondary" type="submit">
        Sign Up!
      </Button>
    </Form>
  );
};
