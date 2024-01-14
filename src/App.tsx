import React from "react";
import styled from "styled-components";
import Circle from "./Circle.tsx";

function App() {
  return (
    <div className="App">
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle bgColor="tomato" text="여기야 여기" />
    </div>
  );
}

export default App;
