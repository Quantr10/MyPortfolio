import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import ExperienceList from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Loading from "./components/Loading";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && <Loading onFinish={() => setLoadingDone(true)} />}

      {loadingDone && (
        <div className="App-container">
          <Navbar />
          <Intro />
          <About />
          <ExperienceList />
          <Projects />
          <Skills />
        </div>
      )}
    </>
  );
}

export default App;
