import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState(false);

  const paraTag = () => {
    setPara(true);
  };

  return (
    <div id="main">
      {/* // Do not alter the main div */}
      {para ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : (
        <button id="click" onClick={paraTag}>
          Click!
        </button>
      )}
    </div>
  );
}

export default App;
