import { useState } from "react";

const classicCadence = {
  1: "Ab",
  4: "Db",
  5: "Eb"
};

const classicCadenceSubs = {
  ...classicCadence,
  6: "Fm",
  "5a": "A",
  5: "Eb"
};

console.log(classicCadence);
console.log(classicCadenceSubs);

const Progressions = () => {
  const [progression, setProgression] = useState({});
  return (
    <div>
      <h3>Current Progression</h3>
      <button onClick={() => setProgression(classicCadence)}>
        Classic Cadence
      </button>
      <button onClick={() => setProgression(classicCadenceSubs)}>
        Cadence with Substitutions
      </button>

      <ul>
        {Object.keys(progression).map((material) => (
          <li key={material}>
            {material}: {progression[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progressions;
