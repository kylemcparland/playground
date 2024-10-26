import Terminal from "./components/Terminal";
import Header from "./components/Header";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <div className="splash-screen">
        <Navbar />
        <div className="header-container">
          <Header />
        </div>
      </div>

      <div className="page-content">
        <div className="terminal-container">
          <Terminal />
          <div className="kyle-skills-container">
            <img className="logo" src="/logotest.png"></img>
            <p>
              Skills include: React, JavaScript, Ruby, Rails, PostgreSQL,
              Express, Node.js, CSS, HTML
            </p>
          </div>
        </div>
        <div className="projects-container">
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
