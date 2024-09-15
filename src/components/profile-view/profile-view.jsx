import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card";
import { Spinner, Form, Button, Row, Col } from "react-bootstrap";

// profileView component: user profile, updated profile, and favorite movies
export const ProfileView = ({ movies }) => {
  // state variables
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [userData, setUserData] = useState({
    Username: "",
    Email: "",
    Password: "",
    Birthday: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // fetches authorized userData plus favoriteMovies from API and sets userData, copied logic from mainView
  useEffect(() => {
    setIsLoading(true);
    const userFromStorage = localStorage.getItem("user");
    const parsedUser = JSON.parse(userFromStorage);
    // original heroku API ***COMMENT BACK IN ONCE AWS EXPERIMENT OVER***
    fetch(
      // `https://my---movies-868565568c2a.herokuapp.com/users`,
      // AWS experiment, is 27017 the right port to use here?
      `http://44.223.176.178/users`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
      .then((response) => response.json())
      // extracts needed info from json
      .then((data) => {
        const foundUser = data.find((user) => user._id === parsedUser._id);
        if (!foundUser) {
          //if user not found, will trigger the catch
          throw new Error("Unable to find user");
        }
        const favMovies = movies.filter((mv) =>
          foundUser.FavoriteMovies.includes(mv.id)
        );
        setFavoriteMovies(favMovies);
        setUserData({ ...foundUser, Password: "" });
        setUser({ ...foundUser, Password: "" });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data; please try again later.");
        setIsLoading(false);
      });
  }, [movies]);

  // handles updating user data
  // /users/:Username is my API endpoint to update user data, PUT method
  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log(userData);
    // API requires password to update user data
    const password = prompt("Please, enter your password: ");
    let updatedUserData = {
      Username: userData.Username,
      Birthday: userData.Birthday,
      Email: userData.Email,
      Password: password,
    };
    //ensures empty string isn't sent back
    if (userData.Password.trim().length !== 0) {
      updatedUserData.Password = userData.Password;
    }

    fetch(
      `https://my---movies-868565568c2a.herokuapp.com/users/${user.Username}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedUserData),
      }
    )
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
        throw new Error(response.errors);
      })
      .then((data) => {
        console.log("data", data);
        setUserData({ ...data, Password: "" });
        setUser({ ...data, Password: "" });
        localStorage.setItem("user", JSON.stringify(data));
        setIsEditing(false);
        alert("Your profile has been successfully updated.");
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        alert("Error updating user profile; please try again later.");
        setIsLoading(false);
      });
  };

  // deletes users
  // /users/:Username is my API endpoint to delete users, DELETE method
  const handleDeleteUser = async () => {
    try {
      // API requires password to delete user
      const password = prompt("Please, enter your password: ");
      let updatedUserData = {
        Password: password,
      };
      const response = await fetch(
        `https://my---movies-868565568c2a.herokuapp.com/users/${user.Username}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updatedUserData),
        }
      );
      if (response.ok) {
        setUserData(null);
        setIsEditing(false);
        localStorage.clear();

        setUser(null);
        setToken(null);
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

  // handles changes to user data
  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handles redirecting to mainView after removing a movie from favorites
  const redirectToMainView = () => {
    window.location.href = "/";
  };

  // user can remove favoriteMovies from profileView, and are then redirected to mainView
  // /users/:Username/movies/:MovieID is my API endpoint to remove movies from FavoriteMovies array, DELETE method
  const handleRemoveFavorite = (movieId) => {
    fetch(
      `https://my---movies-868565568c2a.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      // local testing for AWS EC2
      // `http://34.229.9.155:8080/users/${user.Username}/movies/${movieId}`,
      // public IPv4 of myMovies-API EC2 plus port 27017 for MongoDB???
      // `http://44.223.176.178:27017/users/${user.Username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => {
        // removes movie from favoriteMovies array
        if (response.ok) {
          setFavoriteMovies(favoriteMovies.filter((mv) => mv._id !== movieId));
          alert(
            "This movie has successfully been removed from your Favorites!"
          );
          redirectToMainView();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Sorry, there was an error; please try again later.");
      });
  };

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
              defaultValue={userData.Username}
              onChange={handleChange}
            />
          ) : (
            <Form.Control
              type="text"
              name="Username"
              value={userData.Username}
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
              defaultValue={userData.Birthday}
              onChange={handleChange}
            />
          ) : (
            <Form.Control
              type="date"
              name="Birthday"
              value={userData.Birthday}
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
              defaultValue={userData.Email}
              onChange={handleChange}
            />
          ) : (
            <Form.Control
              type="email"
              name="Email"
              value={userData.Email}
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
              defaultValue={userData.Password}
              onChange={handleChange}
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
              onClick={handleUpdateUser}
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
                handleDeleteUser();
              }}
            >
              Delete Account
            </Button>
          </>
        ) : (
          <Button
            className="m-3"
            variant="outline-primary"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        )}
      </Form>

      <div>
        <h1>Favorite Movies:</h1>
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Row>
            {favoriteMovies.length > 0 ? (
              favoriteMovies.map((favoriteMovie) => (
                <Col className="mt-3 mb-5" key={favoriteMovie.id} md={3}>
                  <MovieCard movie={favoriteMovie} showDescription={false} />
                  <Button
                    className="mt-3 mb-5 d-block mx-auto"
                    variant="outline-danger"
                    onClick={() => handleRemoveFavorite(favoriteMovie.id)}
                  >
                    Remove from Favorites
                  </Button>
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
