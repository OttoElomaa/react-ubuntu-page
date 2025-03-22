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
        <h2>Github</h2>
        <p>
          Github was used to publish the code in a respository, and then clone
          it into the Ubuntu Server virtual machine
        </p>
        <h2>Apache2</h2>
        <p>The site was then hosted using the Apache2 web server in Ubuntu.</p>
      </div>
    </>
  );
}

export default App;
