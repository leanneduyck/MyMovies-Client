import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card";
import { Spinner, Form, Button, Row, Col } from "react-bootstrap";

// profileView component: user profile, updated profile, and favorite movies
export const ProfileView = () => {
  // state variables
  const [user, setUser] = useState([]);
  const [token, setToken] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // fetches authorized user data from API, sets userData, copied logic from mainView

  // /users returns all users in my API...not sure how to get just the logged-in user...???
  // currently returns FIRST USER from database, regardless of who is logged in
  // also doesn't display birthday, only username and email and *** for pw
  // I get an error saying that the bday doesn't conform to yyyy/mm/dd format, but my database is mm/dd/yyyy

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://my---movies-868565568c2a.herokuapp.com/users/${user}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      // extracts needed info from json
      .then((data) => {
        const userData = data.find((user) => ({
          Username: user.Username,
          Birthday: user.Birthday,
          Email: user.Email,
          Password: "***h*a*s*h*e*d***",
        }));
        setUserData(userData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data; please try again later.");
        setIsLoading(false);
      });
  }, []);

  // handles updating user data
  // /users/:Username is my API endpoint to update user data, PUT method

  // keep getting fetch error from line 72, won't load profileView at all; alert message is stuck and won't allow clicking elsewhere
  // is this because I'm trying to fetch the exact same endpoint (using different method)???

  //   try {
  //     fetch(`https://my---movies-868565568c2a.herokuapp.com/users/${user}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //       body: JSON.stringify(updatedUserData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const updatedUserData = {
  //           Username: e.target.elements.Username.value,
  //           Birthday: e.target.elements.Birthday.value,
  //           Email: e.target.elements.Email.value,
  //           Password: e.target.elements.Password.value,
  //         };

  //         setUserData(updatedUserData);
  //         setIsEditing(false);
  //         alert("Your profile has been successfully updated.");
  //       })
  //       .catch((error) => {
  //         console.error("Error updating user data:", error);
  //         alert("Error updating user profile; please try again later.");
  //         setIsLoading(false);
  //       });
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //     alert("Error with the fetch request; please try again later.");
  //     setIsLoading(false);
  //   }

  // deletes users
  // /users/:Username is my API endpoint to delete users, DELETE method

  // currently doesn't delete user from database, do receive correct error message as user

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(
        `https://my---movies-868565568c2a.herokuapp.com/users/${user}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        setUserData(null);
        setIsEditing(false);

        alert("User has been successfully deregistered.");
      } else {
        console.error("Error deregistering user:", error);
        alert("Error deleing your account; please try again later.");
      }
    } catch (error) {
      console.error("Error deregistering user:", error);
      alert("Error deleting your account; please try again later.");
    }
  };

  // fetches favorite movies, copied logic from mainView
  // users/movies/:MovieID is my API endpoint to POST movies to favoriteMovies array, unsure how to GET array

  // currently doesn't display favoriteMovies, though does display correct error message to user

  useEffect(() => {
    fetch(
      `https://my---movies-868565568c2a.herokuapp.com/users/movies/:MovieID/${user.FavoriteMovies}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // extracts needed info from json
        const favoriteMoviesFromApi = data.map((user) => ({
          FavoriteMovie: user.FavoriteMovies,
        }));
        setFavoriteMovies(favoriteMoviesFromApi);
      })
      .catch((error) => {
        console.error("Error fetching favorite movies:", error);
        alert("Error fetching favorite movies; please try again later.");
      });
  }, []);

  // renders profile view with user data and favorite movies, option to update user data
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
          {isEditing ? (
            <Form.Control
              type="password"
              name="Password"
              defaultValue={userData ? userData.Password : ""}
            />
          ) : (
            <Form.Control
              type="password"
              name="Password"
              value="***h*a*s*h*e*d***"
              readOnly={!isEditing}
            />
          )}
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
              movies.map((favoriteMovie) => (
                <Col className="mt-3 mb-3" key={[user.FavoriteMovies]} md={3}>
                  <MovieCard movie={favoriteMovie} />
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
