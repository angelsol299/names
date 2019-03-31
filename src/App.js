import React from "react";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Name: <input type="text" />
        </p>
        <p>Age:</p>
        <button>Increment Age by 1</button>
      </header>
    </div>
  );
};

export default App;
