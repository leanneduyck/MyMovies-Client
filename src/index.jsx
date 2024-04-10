import { createRoot } from "react-dom/client";

// import statement saying need to bundle index.scss
import "./index.scss";

// main component, will eventually use all others
const MyMoviesApplication = () => {
  return (
    // use the name of my backend file here (aka "movie_api"?)
    <div className="movie_api">
      <div>Good morning</div>
    </div>
  );
};

// finds root of app
const container = document.querySelector("#root");
const root = createRoot(container);

// tells React to render app in root DOM element
root.render(<MyMoviesApplication />);