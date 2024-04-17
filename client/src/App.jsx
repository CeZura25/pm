import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  LandingPage,
  LoginPage,
  RegisterPage,
  AdminPage,
  ErrorPage,
  StatusPage,
  ProfilePage,
  DashboardPage,
  addTaskPage,
  addActivityPage,
  addProjectPage,
  allActivityPage,
  allProjectPage,
  allTaskPage,
  updateActivityPage,
  updateProjectPage,
  updateTaskPage,
  deleteActivityPage,
  deleteProjectPage,
  deleteTaskPage,
  Home,
  ProgressReport,
  Database,
  Dash,
} from "./pages";
import { action as registerAction } from "./pages/RegisterPage";
import { action as addUserAction } from "./pages/Database";
import { action as loginAction } from "./pages/LoginPage";
import {loader as dashboardLoader} from "./pages/DashboardPage"


const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true,
        element: <LoginPage />,
        action:loginAction
      },
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        loader: dashboardLoader,
        children: [
          { index:true, element: <Home />},
          {
            path: 'dash',
            element: <Dash />,
          },
          {
            path: 'progress-report',
            element: <ProgressReport />,
          },
          {
            path: 'database',
            element: <Database />,
            action:addUserAction
          },
        ]
      },
    ],
  },

  // {
  //   path: "/about",
  //   element: <LandingPage />,
  // },
  // {
  //   path: "/about",
  //   element: <LandingPage />,
  // },
  // {
  //   path: "/about",
  //   element: <LandingPage />,
  // },
  // {
  //   path: "/about",
  //   element: <LandingPage />,
  // },
  // {
  //   path: "/about",
  //   element: <LandingPage />,
  // },
  // {
  //   path: "/about",
  //   element: <LandingPage />,
  // },
]);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
