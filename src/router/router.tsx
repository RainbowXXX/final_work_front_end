import {
  createBrowserRouter,
} from "react-router-dom";
import App from './App.tsx'
import Index from "../pages/Index.tsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/index",
            element: <Index />,
        }
      ]
    }
  ]
);

export default router;