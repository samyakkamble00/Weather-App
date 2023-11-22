import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const WwwfreshacombyhtmltodesignFREEversion2311TwentyOne = React.lazy(
  () => import("pages/WwwfreshacombyhtmltodesignFREEversion2311TwentyOne"),
);
const WwwfreshacombyhtmltodesignFREEversion2311Twenty = React.lazy(
  () => import("pages/WwwfreshacombyhtmltodesignFREEversion2311Twenty"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/wwwfreshacombyhtmltodesignfreeversion2311twenty"
            element={<WwwfreshacombyhtmltodesignFREEversion2311Twenty />}
          />
          <Route
            path="/wwwfreshacombyhtmltodesignfreeversion2311twentyone"
            element={<WwwfreshacombyhtmltodesignFREEversion2311TwentyOne />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
