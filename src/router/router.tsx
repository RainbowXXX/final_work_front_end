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
import UserPage from "../pages/admin/UserPage";
import GoodsPage from "../pages/admin/GoodsPage";
import OrderPage from "../pages/admin/OrderPage";



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
      element: <AdminPage/>,
      children: [
        { path: 'user', element: <UserPage /> },
        { path: 'goods', element: <GoodsPage /> },
        { path: 'order', element: <OrderPage /> },
      ]
    }, 
    {
      path: "/adminlogin",
      element: <AdminLogin/>
    }
  ]);

export default router;