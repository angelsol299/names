import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(20);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Name:{" "}
          <input
            type="text"
            placeholder="enter your name"
            onChange={e => setName(e.target.value)}
          />
        </p>
        <p>
          Age: <input type="text" placeholder="enter your age" />
        </p>
        <p>Age {age}</p>
        <p>Name: {name}</p>
        <br />
        <button onClick={() => setAge(age + 1)}>Increment Age by 1</button>
        <br />
        <button onClick={() => setAge(age - 1)}>Decrement Age by 1</button>
      </header>
    </div>
  );
};

export default App;
