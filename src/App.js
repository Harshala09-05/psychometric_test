import React, { useEffect } from "react";
import "./App.css";
import Routers from "./Router/Routers";

function App() {
  useEffect(() => {
    // Add beforeunload event listener to warn users on page reload
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue =
        "Reloading will reset your answers. Are you sure you want to leave?";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
