<p>This is an app built using ReactJS.</p>
<p>An un-logged-in user sees MainView with LoginView or SignupView in the NavBar.</p>
<p>A logged-in user sees MainView with Home or ProfileView or Logout in the NavBar. At this point, MainView displays all the MovieCards. If a user clicks on a MovieCard, the user sees MovieView with complete details on the movie/director/etc, as well as a button to return to MainView and a button to add that movie to FavoriteMovies.</p>
<p>The NavBar has a functioning search field utilizing Fuse, which allows users to not type in the exact title but still returns the correct MovieView based on the search result.</p>
<p>Within the ProfileView, a user will see the user's current data as well as a button to edit that data. Upon clicking the button, the user can edit the data. In the editing view, there is also the option to delete the user's account. Also in ProfileView, the user sees all the movies on the user's FavoriteMovies array. The user can delete movies from the array from here.</p>
<p>All of this is tied into MyMovies-Server repo, which is a RESTful API built using CRUD and includes user authentication. The database is on MongoDB Atlas. The app is hosted via Heroku.</p>
<p>The UI is built using React Bootstrap.</p>
<p>Techs Used:</p>
   <ul>
     <li>ReactJS</li>
     <li>Parcel</li>   
     <li>React Bootstrap</li>       
   </ul>
<p>Setup Instructions/Commands:</p>
  <ul>
    <li>Check Node is Installed: "node -v"</li>
    <li>Initialize "package.json" file: inside project folder, "npm init"
      <p>- remove "main: index.js"</p></li>
    <li>.gitignore: add "node_modules", ".cache", ".parcel-cache"</li>
    <li>Install Parcel (global): inside project folder, "sudo npm install -g parcel"</li>
    <li>Install Packages+Dependencies: inside project folder, "npm install --save react react-dom"</li>
    <li>Link to "index.html" file: 
        <li>-body</li>
          <li>---div id="root"</div></li>
          <li>---script type="module" src="index.jsx"/script</li>
        <li>-/body</li>
        </li>
    <li>Parcel to Build Project (creates "dist" folder): inside project folder, "parcel src/index.html" (command also used to deploy app every time)</li>
  </ul>
  <p>Dependencies:</p>
  <ul>
     <li>"parcel": "^2.12.0"</li>
     <li>"react": "^18.2.0"</li>
     <li>"react-dom": "^18.2.0"</li>
     <li>"react-bootstrap": "^2.10.2"</li>
    <li> "bootstrap": "^5.3.3"</li>
    <li>"fuse.js": "^7.0.0"</li>
  </ul>
  <p>devDependencies:</p>
  <ul>
     <li>"@parcel/transformer-sass": "^2.12.0"</li>
     <li>"process": "^0.11.10"</li>
     <li>"prop-types": "^15.8.1"</li>
  </ul>
