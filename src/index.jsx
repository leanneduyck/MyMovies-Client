import { createRoot } from "react-dom/client";

// import views
import { MainView } from "../src/components/main-view/main-view.jsx";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import to bundle index.scss
import "./index.scss";

// main component, will eventually use all others
const MyMoviesApplication = () => {
  return (
    // use the name of my backend file here (aka "movie_api"?)
    <div className="movie_api">
      <MainView />
    </div>
  );
};

// finds root of app
const container = document.querySelector("#root");
const root = createRoot(container);

// tells React to render app in root DOM element
root.render(<MyMoviesApplication />);
