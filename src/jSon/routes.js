import FindHospital from "../pages/findHospital/FindHospital";
import LandingPage from "../pages/landingPage/LandingPage";
import Profile from "../pages/profile/Profile";

const routes = [
  {
    id: 1,
    path: "/",
    component: <LandingPage />,
  },
  {
    id: 2,
    path: "/find-hospital",
    component: <FindHospital />,
  },
  {
    id: 3,
    path: "/profile",
    component: <Profile />,
  },
];

export default routes;
