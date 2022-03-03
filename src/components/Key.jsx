import _ from "lodash";
import "../styles/_key.scss";

import React from "react";

class Key extends React.Component {
  flatNote = (note) => {
    return note.length > 1;
  };

  render() {
    // add a class to the keys
    let keyClass = "key";
    const flatNote = this.flatNote(this.props.note);

    // add a flat class for black keys
    if (flatNote) {
      keyClass += " flat";
    }

    // renders each key conditionally
    let key;

    // black
    if (flatNote) {
      key = <div className={keyClass}></div>;
    } else {
      // white + text
      key = (
        <div className={keyClass}>
          <div className="key-text">{this.props.note.toUpperCase()}</div>
        </div>
      );
    }
    return key;
  }
}

export { Key };

// functional component refactoring attempt
// const Key = (props) => {
//   return (
//     <>
//       <div className="key">
//         <div className="key-text">{props.note.toUpperCase()}</div>
//       </div>
//     </>
//   );
// };
