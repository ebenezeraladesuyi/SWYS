/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "../layout";
import { lazy } from "react";
// import HomeComp from "../pages/homePage/HomeComp";

const HomeComp = lazy(() => import("../pages/homePage/HomeComp"))

export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    }
])