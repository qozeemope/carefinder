import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./jSon/routes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.id} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
