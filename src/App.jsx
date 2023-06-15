import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage.jsx";

import FindHospital from "./pages/findHospital/FindHospital.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* route1 */}
          <Route
            path="/"
            exact
            element={
              <>
                <LandingPage />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <LandingPage />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <LandingPage />
              </>
            }
          />
          <Route path="/find-hospital" element={<FindHospital />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
