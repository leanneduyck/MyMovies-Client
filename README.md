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
        <li>body</li>
          <li>div id="root"</div></li>
          <li>script type="module" src="index.jsx"/script</li>
        <li>/body</li>
        </li>
    <li>Parcel to Build Project (creates "dist" folder): inside project folder, "parcel src/index.html"</li>
  </ul>
