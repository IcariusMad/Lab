import React from "react";

import "./App.css";

function App() {
  return React.createElement(
    "div",
    {
      style: {
        background: "#23272f",
        color: "white",
        display: "flex",
        fontSize: "1.1rem",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      },
    },
    React.createElement("span", null, "Está potente la sintaxis de"),
    React.createElement("h1", null, "React"),
    React.createElement("img", {
      width: 200,
      src: "logo192.png",
    })
  );
}

export default App;
