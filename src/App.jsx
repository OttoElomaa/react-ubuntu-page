import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Otto's Webpage Running in Linux</h1>
        <p>This webpage was built using...</p>
        <h2>Vite & React</h2>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <h2>Apache2</h2>
        <p>The site was hosted using the Apache2 web server in Ubuntu.</p>
        <p>A new VM was made with bridged adapter turned on</p>
        <p>Apache 2 was installed - sudo apt-get install apache2</p>
        <p>IP address founf - hostname -I</p>

        <h2>Github</h2>
        <p>Code was published in a Github respository </p>
        <p>Repo was cloned into the Ubuntu Server virtual machine</p>
        <p>cd /var/www/html - git clone reponame.git</p>

        <h2>NPM and Vite</h2>
        <p>NPM was installed - sudo apt-get install npm</p>
        <p>Vite was installed - sudo npm install vite</p>
        <p>React app was built - sudo npm run build</p>
        <p></p>

        <h2>Apache site settings</h2>
        <p>Built app was moved to /var/www/html/dist</p>
        <p>
          New config was made called myapp, where /dist was set as document root
        </p>
        <p>sudo a2dissite 000-default.conf</p>
        <p>sudo a2ensite myapp.conf</p>
        <p>sudo systemctl reload apache2</p>
        <p>Source: https://www.linkedin.com/pulse/step-by-step-guide-hosting-your-first-react-app-apache-anuj-pandey-u5urf/</p>
      </div>
    </>
  );
}

export default App;
