import "../styles/index.scss";
import Progressions from "./Progressions";
import moon from "../images/moon2.svg";

import React from "react";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={moon} alt="moon" width="250" />
        <Progressions />
      </main>
    </>
  );
};

export default App;
