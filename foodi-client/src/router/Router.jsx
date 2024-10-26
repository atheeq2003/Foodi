import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import CartPage from "../pages/shop/CartPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/cart-page",
          element: <CartPage/>
        },
        {
          path: "/menu",
          element: <Menu/>
        },
        {
          path: "/update-profile",
          element: <UpdateProfile/>
        }
      ],
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ]);

export default router;