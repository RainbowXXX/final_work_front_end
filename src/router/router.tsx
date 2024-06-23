import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import MainPage from '../pages/MainPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import AdminPage from "../pages/admin/AdminPage";
import AdminLogin from "../pages/admin/AdminLogin";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path: '', element: <MainPage /> },
        { path: 'shop', element: <ShopPage /> },
        { path: 'cart', element: <CartPage /> },
        { path: 'index', element: <MainPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'product/:id', element: <ProductDetailPage /> }
        
      ],
    }, 
    {
      path: "/admin",
      element: <AdminPage/>
    }, 
    {
      path: "/adminlogin",
      element: <AdminLogin/>
    }
  ]);

export default router;