import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(20);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Name: <input type="text" placeholder="enter your name" />
        </p>
        <p>
          Age:
          <input type="text" placeholder="enter your age" />
        </p>
        <button>Increment Age by 1</button>
        <br />
        <button>Decrement Age by 1</button>
      </header>
    </div>
  );
};

export default App;
