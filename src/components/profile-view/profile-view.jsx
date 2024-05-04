import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card";
import { Spinner, Form, Button, Row, Col } from "react-bootstrap";

// profileView component: user profile, updated profile, and favorite movies
export const ProfileView = ({movies}) => {
  // state variables
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [userData, setUserData] = useState({
    Username: '',
    Email: '',
    Password: '',
    Birthday: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // fetches authorized user data from API, sets userData, copied logic from mainView

  // /users returns all users in my API...not sure how to get just the logged-in user...???
  // currently returns FIRST USER from database, regardless of who is logged in
  // also doesn't display birthday, only username and email and *** for pw
  // I get an error saying that the bday doesn't conform to yyyy/mm/dd format, but my database is mm/dd/yyyy

  useEffect(() => {
    setIsLoading(true);
    const userFromStorage = localStorage.getItem("user")
    const parsedUser = JSON.parse(userFromStorage)
    fetch(`https://my---movies-868565568c2a.herokuapp.com/users`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((response) => response.json())
      // extracts needed info from json
      .then((data) => {
        const foundUser = data.find((user) => user._id === parsedUser._id);
        if(!foundUser){
          //if user not found this code will trigger the catch
          throw new Error("Unable to find user") 
        }
        const favMovies = movies.filter(mv => foundUser.FavoriteMovies.includes(mv.id))
        setFavoriteMovies(favMovies)
        setUserData({...foundUser, Password: ""});
        setUser({...foundUser, Password: ""});
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data; please try again later.");
        setIsLoading(false);
      });
  }, []);


  const handleUpdateUser = (e) => {
    e.preventDefault()
  // handles updating user data
  // /users/:Username is my API endpoint to update user data, PUT method

  // keep getting fetch error from line 72, won't load profileView at all; alert message is stuck and won't allow clicking elsewhere
  // is this because I'm trying to fetch the exact same endpoint (using different method)???

  console.log(userData)
    let updatedUserData = {
      Username: userData.Username,
      Birthday: userData.Birthday,
      Email: userData.Email,
    }
//ensures empty string isnt sent back
    if(userData.Password.trim().length !== 0){
      updatedUserData.Password = userData.Password
    }
  
      fetch(`https://my---movies-868565568c2a.herokuapp.com/users/${user.Username}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedUserData),
      })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json()
          }
          throw new Error(response.errors)
        })
        .then((data) => {
          console.log("data", data)
          setUserData({...data, Password: ""});
          setUser({...data, Password: ""});
          localStorage.setItem("user", JSON.stringify(data))
          setIsEditing(false);
          alert("Your profile has been successfully updated.");
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
          alert("Error updating user profile; please try again later.");
          setIsLoading(false);
        });
  }

  // deletes users
  // /users/:Username is my API endpoint to delete users, DELETE method

  // currently doesn't delete user from database, do receive correct error message as user

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(
        `https://my---movies-868565568c2a.herokuapp.com/users/${user.Username}`,
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
        localStorage.clear()
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

  const handleChange = (e) => {
    setUserData(prevState => ({...prevState, [e.target.name] : e.target.value}))
  }
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
              favoriteMovies.map((favoriteMovie) => (
                <Col className="mt-3 mb-3" key={favoriteMovie.id} md={3}>
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
