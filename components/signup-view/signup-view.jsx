import React from "react";
import { useState } from "react";

export const SignupView = () => {
  // prevents default reloading entire page
  const handleSubmit = (event) => {
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
  // state variables
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      Signup!
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="5"
          />
        </label>
      </div>
      <div>
        <label>
          Birthday:
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            required
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
