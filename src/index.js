
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "./App";
import './index.css';
import { AllData } from "./Data/AllData";
import AllTable from "./Table/AllTable";
import AllBilling from "./Billing/AllBilling";
import AllVirtual from "./VirtualReality/AllVirtual";
import AllProfile from "./Profile/AllProfile";
import AllSingIn from "./SingIn/AllSignIn";
import AllSignUp from "./SignUp/AllSignUp";
import Layout from "./ScrollToTop/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <App />
          </div>
        ),
      },
      {
        path: "table",
        element: <AllTable />,
      },
      {
        path: "billing",
        element: <AllBilling />,
      },
      {
        path: "virtual",
        element: <AllVirtual />,
      },
      {
        path: "profile",
        element: <AllProfile />,
      },
      {
        path: "signin",
        element: <AllSingIn />,
      },
      {
        path: "signup",
        element: <AllSignUp />,
      },
    ]
  }


]);

createRoot(document.getElementById("root")).render(
  <AllData >

    <RouterProvider router={router} />

  </AllData>



);



