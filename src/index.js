import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function XoxGameComponent() {
  return (
    <>
      <h1>Xox Oyunu</h1>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<XoxGameComponent />);

reportWebVitals();
