import CourseHistory from "./pages/dashboard/CourseHistory";
import Courses from "./pages/dashboard/Courses";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Home from "./pages/dashboard/Home";
import CourseRegistered from "./pages/dashboard/CourseRegistered";
import GraduationEligibility from "./pages/dashboard/GraduationEligibility";
import AuthLayout from "./pages/auth/AuthLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

const routesObjects = [
  {
    id: 1,
    path: "/",
    element: (
      <DashboardLayout>
        <Home />
      </DashboardLayout>
    ),
  },
  {
    id: 2,
    path: "/dashboard/courses",
    element: (
      <DashboardLayout>
        <Courses />
      </DashboardLayout>
    ),
  },
  {
    id: 3,
    path: "/history",
    element: (
      <DashboardLayout>
        <CourseHistory />
      </DashboardLayout>
    ),
  },

  {
    id: 4,
    path: "/dashboard/courses/courseregistered",
    element: (
      <DashboardLayout>
        <CourseRegistered />
      </DashboardLayout>
    ),
  },
  {
    id: 5,
    path: "/dashboard/courses/graduationeligibility",
    element: (
      <DashboardLayout>
        <GraduationEligibility />
      </DashboardLayout>
    ),
  },
  {
    id: 6,
    path: "/login",
    element: (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    ),
  },
  {
    id: 7,
    path: "/signup",
    element: (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    ),
  },
];

export default routesObjects;
