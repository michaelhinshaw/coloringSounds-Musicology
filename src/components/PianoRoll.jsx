import "../styles/_pianoRoll.scss";
import _ from "lodash";
import { NOTES } from "../global/constants";
import React from "react";
import { Key } from "./Key";

const PianoRoll = () => {
  const keys = _.map(NOTES, (note, index) => {
    return <Key key={index} note={note} />;
  });

  return (
    <>
      <div className="pianoRoll">{keys}</div>
    </>
  );
};

export default PianoRoll;
