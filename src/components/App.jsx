import "../styles/index.scss";
import Progressions from "./Progressions";
import PianoRoll from "./PianoRoll";
import moon from "../images/moon2.svg";
import { Selector } from "./Selector";

import React from "react";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Three and Four voice chords</h1>
        </section>
        <img src={moon} alt="moon" width="250" />
        <Progressions />
        <PianoRoll />
        <Selector />
      </main>
    </>
  );
};

export default App;
