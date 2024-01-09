/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "../layout";
import { lazy } from "react";
import RegisterLayout from "../layout/RegisterLayout";


const HomeComp = lazy(() => import("../pages/homePage/HomeComp"))
const RegisterAttendee = lazy(() => import("../pages/register/RegisterAttendee"))

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
    },
    {
        path: "/registerattendee",
        element: <RegisterLayout />,
        children: [
            {
                index: true,
                element: <RegisterAttendee />
            }
        ]
    },
])