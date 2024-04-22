import { createRoot } from "react-dom/client";
import Container from "react-bootstrap/Container";

// import views
import { MainView } from "../src/components/main-view/main-view.jsx";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import to bundle index.scss
import "./index.scss";

// main component, will eventually use all others
const MyMoviesApplication = () => {
  return (
    // wrap entire app in boostrap Container
    <Container>
      <MainView />
    </Container>
  );
};

// finds root of app
const container = document.querySelector("#root");
const root = createRoot(container);

// tells React to render app in root DOM element
root.render(<MyMoviesApplication />);
