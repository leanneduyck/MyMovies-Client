<p>Techs Used:</p>
   <ul>
     <li>ReactJS</li>
     <li>Parcel</li>          
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
     <li>Add state-based router libraries: "sudo npm install react-router react-router-dom --save"</li>
  </ul>
  <p>Dependencies:</p>
  <ul>
     <li>"parcel": "^2.12.0"</li>
     <li>"react": "^18.2.0"</li>
     <li>"react-dom": "^18.2.0"</li>
     <li>"react-bootstrap": "^2.10.2"</li>
    <li> "bootstrap": "^5.3.3"</li>
     <li>"react-router": "^6.23.0"</li>
     <li>"react-router-dom": "^6.23.0"</li>
  </ul>
  <p>devDependencies:</p>
  <ul>
     <li>"@parcel/transformer-sass": "^2.12.0"</li>
     <li>"process": "^0.11.10"</li>
     <li>"prop-types": "^15.8.1"</li>
  </ul>
