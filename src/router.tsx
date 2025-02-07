import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Chatpage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Root from "./Root";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import LoginHome from "./pages/LoginHome";
import KakaoAuth from "./pages/KakaoAuth";
import Signup from "./pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Signup />,
      },
      {
        path: "kakao",
        element: <KakaoAuth />,
      },
      {
        path: "must",
        element: <ProtectedRoute />,
        children: [
          {
            path: "login",
            element: <LoginHome />,
          },
        ],
      },
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "chats",
            element: <Chatpage />,
          },
          {
            path: "home",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
