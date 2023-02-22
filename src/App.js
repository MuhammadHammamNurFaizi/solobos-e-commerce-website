import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Arrival from "./pages/Arrival";
import Bestseller from "./pages/Bestseller";
import Boots from "./pages/Boots";
import Chart from "./pages/Chart";
import Checkout from "./pages/Checkout";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Signin from "./pages/Signin";
import Sneaker from "./pages/Sneaker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/> ,
  },
  {
    path: "/shop",
    element: <Shop/> ,
  },
  {
    path: "/arrival",
    element: <Arrival/> ,
  },
  {
    path: "/bestseller",
    element: <Bestseller/>,
  },
  {
    path: "/boots",
    element: <Boots/>,
  },
  {
    path: "/chart",
    element: <Chart/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/sneaker",
    element: <Sneaker/>,
  },
]);

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
