# MyMovies-Client

## Overview:

Client: This React app caters to both unauthenticated and authenticated users. Upon login, users can access various views including Home, Profile, and Movie details. Key features include CRUD operations for managing user data and favorite movies (via a custom API), as well as integration with the MyMovies-Server API for seamless data management. It is designed as a SPA and uses React Bootstrap for UI. It features dynamic search functionality powered by Fuse. Parcel handles bundling.
This is the frontend of the app, built using the backend from MyMovies-Server.

## Key Features:

1. **User Authentication:** Secure login and signup processes for user authentication.
2. **MainView:** Displays MovieCards listing all available movies.
3. **MovieView:** Shows detailed information about a selected movie, with options to return to MainView or add the movie to favorites.
4. **NavBar:** Includes navigation elements based on user authentication status (Login/Signup or Home/Profile/Logout).
5. **ProfileView:** Allows users to view and edit their profile information, manage favorite movies, and delete their account.
6. **Search Functionality:** Utilizes Fuse for a responsive search experience, enabling users to find movies by title efficiently.

## Links:

- Website: [https://main--react-mymovies.netlify.app/](https://main--react-mymovies.netlify.app/)
- ServerSide Website: [https://my---movies-868565568c2a.herokuapp.com/](https://my---movies-868565568c2a.herokuapp.com/)
- ServerSide GH Repo: [https://github.com/leanneduyck/MyMovies-Server.git](https://github.com/leanneduyck/MyMovies-Server.git)

## Technologies Used:

1. **ReactJS:** Frontend library for building user interfaces.
2. **React DOM:** Provides DOM-specific methods that can be used at the top level of your app to manage your React components.
3. **React Router DOM:** A library for declarative routing within the application.
4. **React Bootstrap:** A UI framework for responsive design components.
5. **Parcel:** Bundler for packaging the application code.
6. **Fuse.js:** A lightweight fuzzy-search library.
7. **LightningCSS:** A library for transforming CSS (used by Parcel).
8. **Prop-Types:** A library for type-checking React props.
9. **Process:** A library that provides a simple wrapper for the Node.js process module, often used for environment variables in the frontend.
10. **@parcel/watcher:** A fast, low-level filesystem watcher for Parcel.
11. **@parcel/transformer-sass:** A Parcel transformer for compiling Sass/SCSS files.
12. **ESLint:** Tool for identifying and fixing code quality issues.
13. **Prettier:** Tool for code formatting.
14. **Cross-Browser Compatibility:** Ensures the app works in Chrome, Firefox, Safari, Edge, and Internet Explorer 11.
15. **Deployment:** Deployed via Netlify.

## Setup Instructions:

### Local Setup:

1. **Check Node.js Installation:** Ensure Node.js is installed using `node -v`.
2. **Initialize Project:** Create a `package.json` file in the project folder with `npm init`.
3. **Set up .gitignore:** Add `node_modules`, `.cache`, and `.parcel-cache` to `.gitignore`.
4. **Install Parcel:** Globally install Parcel with `sudo npm install -g parcel`.
5. **Install Dependencies:** Install React and React DOM with `npm install --save react react-dom`.
6. **Configure Index.html:** Link `index.html` to `index.jsx` for the application entry point.
7. **Build Project:** Use Parcel to build the project with: `parcel src/index.html`.
8. **Add Router:** Integrate state-based routing with `react-router` and `react-router-dom`.
9. **Install Redux:** Manage application state with Redux using: `npm install redux --save`.

### Cleaning:

1. Clear cache by running: `rm -rf .cache`
2. Reinstall node_modules: `rm -rf node_modules; then npm install`

### Deployment to Netlify:

1. **Parcel Build:** Build the project for deployment with: `parcel build src/index.html`.
2. **Netlify Deployment:** Deploy automatically to Netlify using Parcel, ensuring updates reflect live.
