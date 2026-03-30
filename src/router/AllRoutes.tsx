/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "../layout";
import { lazy } from "react";
// import AllRegisteredAttendee from "../pages/register/AllRegisteredAttendee";
// import RegisterLayout from "../layout/RegisterLayout";


const HomeComp = lazy(() => import("../pages/homePage/HomeComp"))
const RegisterAttendee = lazy(() => import("../pages/register/RegisterAttendee"))
const AllRegisteredAttendee = lazy(() => import("../pages/register/AllRegisteredAttendee"))

export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            },
            {
                path: "registerattendee",
                element: <RegisterAttendee />
            },
            {
                path: "registered",
                element: <AllRegisteredAttendee />
            },
        ]
    },
    // {
    //     path: "/registerattendee",
    //     element: <RegisterLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <RegisterAttendee />
    //         }
    //     ]
    // },
])