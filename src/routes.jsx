import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import Driver from "./pages/Driver";
import DriverAcceptedOrders from "./pages/DriverAcceptedOrders";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ManageCustomers from "./pages/ManageCustomers";
import ManageDriver from "./pages/ManageDriver";
import ManageStatus from "./pages/ManageStatus";
import PlacedOrder from "./pages/PlacedOrder";
import Register from "./pages/Register";
import TrackOrder from "./pages/TrackOrder";
import ViewOrder from "./pages/ViewOrder";

export const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/admin", element: <Admin /> },
  { path: "/managestatus", element: <ManageStatus /> },
  { path: "/placedorder", element: <PlacedOrder /> },
  { path: "/managedriver", element: <ManageDriver /> },
  { path: "/managecustomers", element: <ManageCustomers /> },
  { path: "/driver", element: <Driver /> },
  { path: "/acceptedorders", element: <DriverAcceptedOrders /> },
  { path: "/track", element: <TrackOrder /> },
  { path: "/vieworder", element: <ViewOrder /> },
  { path: "/register", element: <Register /> },
  { path: "/about", element: <About /> },
  { path: "/doc", element: <Documentation /> },
  { path: "/contact", element: <Contact /> },
];

