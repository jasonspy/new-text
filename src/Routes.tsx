import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/register/index";
import MentorSignup from "./pages/auth/register/mentor";
import NotFound from "./pages/Error/NotFound";
import GetStarted from "./pages/auth/GetStarted";
import IndividualSignUp from "./pages/auth/register/individual";
import NotVerified from "./pages/Error/NotVerified";
import GetStartedCorporate from "./pages/auth/register/corporate";
import CssFibre from "./pages/CssFibre";
import HySip from "./layouts/CssSwitchLayout";
import CssMobile from "./pages/CssMobile";
import Contact from "./pages/Contact";
import CssSwitch from "./layouts/CssSwitchLayout";
import About from "./pages/About";
import Policy from "./pages/Policy";
import path from "path";
import HySipLayout from "./layouts/HySipLayout";

const baseRoutes = [
  {
    path: "/",
    element: <GetStarted />,
    title: "Get Started",
  },
//   {
//     path: "/",
//     element: ,

// },
  {
    path: "/privacy-policy",
    element: <Policy />,
    title: "Get Started",
  },
  {
    path: "/individual",
    element: <IndividualSignUp />,
    title: "IndividualSignUp",
  },
  {
    path: "/css-fibre",
    element: <CssFibre />,
    title: "CssFibre",
  },
   {
    path: "/hy-sip",
    element: <HySipLayout/>,
    title: "HySipLayout",
  },
     {
    path: "/css-switch",
    element: <CssSwitch/>,
    title: "CssSwitch"
  },
  {
    path: "/css-mobile",
    element: <CssMobile />,
    title: "CssMobile",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
  {
    path: "/about",
    element: <About />,
    title: "About",
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  //   title: "login",
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  //   title: "signup",
  // },
  // {
  //   path: "/signup/mentor",
  //   element: <MentorSignup />,
  //   title: "mentor-signup",
  // },
  {
    path: "/corporate",
    element: <GetStartedCorporate />,
    title: "CorporateSignUp",
  },


  {
    path: "*",
    element: <NotFound />,
    title: "not-found",
  },
];

const getRoutesByRole = (role: string) => {
  return baseRoutes
};

const AppRoutes = () => {
  const authUser = useAppSelector((state) => state?.auth);

  const { userData } = authUser;

  const roleData = userData?.role;
  const role = roleData?.toUpperCase();

  const pageRoutes = getRoutesByRole(role).map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <BrowserRouter>
      <Routes>{pageRoutes}</Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
