import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card";
// adding Modal and Image imports from react-bootstrap for S3 image UI
import { Spinner, Form, Button, Row, Col, Modal, Image } from "react-bootstrap";

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

  // S3 image upload and viewing
  const [selectedImageType, setSelectedImageType] = useState("original"); // manages selected image type
  const [imageFile, setImageFile] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userImages, setUserImages] = useState([]); // holds images retrieved from the server

  // fetches authorized userData plus favoriteMovies from API and sets userData, copied logic from mainView
  // adding in fetch for user's uploaded images from S3
  useEffect(() => {
    setIsLoading(true);
    const userFromStorage = localStorage.getItem("user");
    const parsedUser = JSON.parse(userFromStorage);
    fetch(
      `http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users`,
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

        // fetch user's uploaded images from S3
        fetchImages(selectedImageType);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data; please try again later.");
        setIsLoading(false);
      });
  }, [movies, selectedImageType]);

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
      `http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users/${user.Username}`,
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
        `http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users/${user.Username}`,
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
      `http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users/${user.Username}/movies/${movieId}`,
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

  // handles image upload
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // handles image upload to S3
  const handleImageUpload = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image file to upload.");
      return;
    }

    try {
      // create form data to send the file in the request
      const formData = new FormData();
      formData.append("image", imageFile);

      // or does this need to be the S3 bucket URL???
      // arn:aws:s3:::my-movies-react-images-bucket
      const uploadUrl = `http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/images/${userData.Username}`;

      const response = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
        setImageFile(null); // clear the selected file
        fetchImages(selectedImageType); // refresh images after upload
      } else {
        throw new Error("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image; please try again later.");
    }
  };

  // fetches images based on the selected type
  const fetchImages = async (type) => {
    try {
      const response = await fetch(
        `/api/images/${userData.Username}?type=${type}`
      );
      const data = await response.json();
      setUserImages(data); // updates with the fetched images
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  // handles image click to view in modal
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  // handles closing of the image modal
  const handleCloseModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
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

      {/* Image Upload Section */}
      <div className="image-upload-section">
        <br />
        <br />
        <br />
        <h3>Upload New Image</h3>
        <Form onSubmit={handleImageUpload}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Choose an image to upload:</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Upload Image
          </Button>
        </Form>
      </div>

      {/* Image Type Selection */}
      <div className="image-type-selection">
        <h3>View Uploaded Images</h3>
        <Form.Group>
          <Form.Label>Select Image Type:</Form.Label>
          <Form.Control
            as="select"
            value={selectedImageType}
            onChange={(e) => setSelectedImageType(e.target.value)}
          >
            <option value="original">Original Images</option>
            <option value="resized">Resized Images</option>
          </Form.Control>
        </Form.Group>
      </div>

      {/* Image Gallery */}
      <div className="image-gallery">
        <br />
        <h2>Your Uploaded Images</h2>
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : userImages.length > 0 ? (
          <Row>
            {userImages.map((image) => (
              <Col key={image} md={3} className="mb-3">
                <Image
                  src={`https://my-movies-react-images-bucket.s3.amazonaws.com/${image}`}
                  thumbnail
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    handleImageClick({
                      url: `https://my-movies-react-images-bucket.s3.amazonaws.com/${image}`,
                      description: "No description",
                    })
                  }
                  className="image-thumbnail"
                />
              </Col>
            ))}
          </Row>
        ) : (
          <p>No images uploaded yet.</p>
        )}
      </div>

      {/* Modal to View Selected Image */}
      <Modal show={showImageModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>View Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <div>
              <Image src={selectedImage.url} fluid />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
