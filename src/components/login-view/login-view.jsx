import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
  // useState for username and pw
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // callback telling API to validate username and pw and return JWT
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Username: username,
      Password: password,
    };
    // connects to API
    // my API has no 'login' endpoint...just creating/updating/deleting a user...??? still able to login at this point
    fetch("https://my---movies-868565568c2a.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // transforms response into json object so can extract JWT sent by API
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          // stores token in localStorage so re-logging in is unnecessary when changing views
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          // pass user and token back to mainView to be used in all additional API requests
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user exists, please sign up.");
        }
      })
      // error handling
      .catch((e) => {
        alert("Sorry, something went wrong.");
      });
  };

  return (
    // callback telling API to validate username and pw
    <Form className="m-3" onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          // binding: assigning values of form fields to new state variables
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="5"
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          // binding: assigning values of form fields to new state variables
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          maxLength="20"
        />
      </Form.Group>
      <Button className="m-3" variant="primary" type="submit">
        Log In!
      </Button>
    </Form>
  );
};
