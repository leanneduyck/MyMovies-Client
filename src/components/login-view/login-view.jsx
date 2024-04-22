import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  // useState for username and pw
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // prevents default reloading entire page
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Username: username,
      Password: password,
    };
    // connects to API
    // my API has no 'login' endpoint...just creating/updating/deleting a user...???
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
          alert("No such user.");
        }
      })
      .catch((e) => {
        alert("Something went wrong.");
      });
  };
  return (
    // callback telling API to validate username and pw
    <form onSubmit={handleSubmit}>
      {" "}
      Login!
      <div>
        <label>
          Username:
          <input
            // binding: assigning values of form fields to new state variables
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // required field
            required
            // required minlength
            minLength="5"
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required field
            required
            // required maxlength
            maxLength="20"
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
