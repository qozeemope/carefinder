import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import routes from "./jSon/routes.js";

function App() {
  return (
    <div className=" ">
      <Router>
        <Routes>
          {routes.map((route, index) => {
            console.log(route.path);
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
