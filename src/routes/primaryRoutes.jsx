import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NosotrosPage from "../pages/NosotrosPage";
import ProductPage from "../pages/ProductPage";
import ProductsPage from "../pages/ProductsPage";
import RegisterPage from "../pages/RegisterPage";
import AuthValidation from "./AuthValidation";

export const primaryRoutes = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: '/',
        element: <AuthValidation />,
        children: [
          {
            index: true,
            element: <HomePage />
          },
          {
            path: 'productos',
            element: <ProductsPage />
          },
                    {
            path: 'productos/:id',
            element: <ProductPage />
          },
          {
            path: 'nosotros',
            element: <NosotrosPage />
          }
        ]
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
]);