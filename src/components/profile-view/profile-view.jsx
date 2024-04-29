import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card";
import { Spinner, Form, Button, Row, Col } from "react-bootstrap";

// profileView component: user profile, updated profile, and favorite movies
export const ProfileView = () => {
  // state variables
  const [user, setUser] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // fetches authorized user data from API, sets userData state
  // not entirely sure my fetch is correct, /users returns all users in my API...not sure how to get just the one user...???
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://my---movies-868565568c2a.herokuapp.com/users`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data; please try again later.");
        setIsLoading(false);
      });
  }, []);

  // handles updating user data
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const updatedUserData = {
      Username: e.target.elements.Username.value,
      Birthday: e.target.elements.Birthday.value,
      Email: e.target.elements.Email.value,
      Password: e.target.elements.Password.value,
    };

    try {
      const response = await fetch(
        `https://my---movies-868565568c2a.herokuapp.com/users/${userData.Username}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updatedUserData),
        }
      );
      if (response.ok) {
        // Refresh user data
        setUserData(updatedUserData);
        setIsEditing(false);
        alert("Your profile has been successfully updated.");
      } else {
        console.error("Failed to update user data:", response.status);
        alert("Failed to update user profile; please try again later.");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Error updating user profile; please try again later.");
    }
  };

  // Delete user data
  const handleDeleteUser = async () => {
    try {
      // how do I delete this from my API?
      alert("User has been successfully deregistered.");
    } catch (error) {
      console.error("Error deregistering user:", error);
      alert("Error deregistering user; please try again later.");
    }
  };

  // fetch favorite movies, copied logic from mainView
  // users/movies/:MovieID is my API endpoint to POST movies to favoriteMovies array, unsure how to GET array
  useEffect(() => {
    if (!userData) return;

    fetch(
      `https://my---movies-868565568c2a.herokuapp.com/users/${userData.Username}/movies`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFavoriteMovies(data.favoriteMovies);
      })
      .catch((error) => {
        console.error("Error fetching favorite movies:", error);
        alert("Error fetching favorite movies; please try again later.");
      });
  }, [userData]);

  // renders profile view with user data and favorite movies
  // user data is fetched from API, favorite movies are fetched from movies array
  // how do I connect favorite movies array to API?
  // user data can be updated, user can be deleted from view after clicking 'edit'
  return (
    <div>
      <h1>Profile:</h1>

      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          {isEditing ? (
            <Form.Control
              type="text"
              name="Username"
              defaultValue={userData ? userData.Username : ""}
            />
          ) : (
            <Form.Control
              type="text"
              name="Username"
              value={userData ? userData.Username : ""}
              readOnly
            />
          )}
        </Form.Group>

        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday:</Form.Label>
          {isEditing ? (
            <Form.Control
              type="date"
              name="Birthday"
              defaultValue={userData ? userData.Birthday : ""}
            />
          ) : (
            <Form.Control
              type="date"
              name="Birthday"
              value={userData ? userData.Birthday : ""}
              readOnly
            />
          )}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          {isEditing ? (
            <Form.Control
              type="email"
              name="Email"
              defaultValue={userData ? userData.Email : ""}
            />
          ) : (
            <Form.Control
              type="email"
              name="Email"
              value={userData ? userData.Email : ""}
              readOnly
            />
          )}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="Password"
            value="***h*a*s*h*e*d***"
            readOnly={!isEditing}
          />
        </Form.Group>

        {isEditing ? (
          <>
            <Button
              className="m-3"
              variant="outline-primary"
              type="submit"
              onClick={() => {
                handleUpdateUser();
              }}
            >
              Update
            </Button>
            <Button
              className="m-3"
              variant="outline-danger"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button
              className="m-3"
              variant="danger"
              onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
                handleDeleteUser();
              }}
            >
              Delete Account
            </Button>
          </>
        ) : (
          <Button
            className="m-3"
            variant="primary"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        )}
      </Form>

      <h1>Favorite Movies:</h1>
      <div>
        <h1>My Favorite Movies:</h1>
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Row>
            {favoriteMovies.length > 0 ? (
              movies.map((MovieID) => (
                <Col className="mt-3 mb-3" key={user.FavoriteMovies} md={3}>
                  <MovieCard MovieID={[user.FavoriteMovies]} />
                </Col>
              ))
            ) : (
              <Col>You have not chosen any favorite movies yet!</Col>
            )}
          </Row>
        )}
      </div>
    </div>
  );
};
