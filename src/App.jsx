import React from "react";
import { ToastContainer } from "react-toastify";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <Router />
      <ToastContainer position={"top-center"} />
    </>
  );
}

export default App;
