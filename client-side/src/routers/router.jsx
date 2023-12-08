/* eslint-disable no-unused-vars */
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Shop from "../components/Shop";
import App from "../App";
import About from "../components/About";
import Blog from "../components/Blog";
import Home from "../components/Home";
import SingleBook from "../components/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Logout from "../components/Logout";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/shop",
        element:<Shop />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/bolg",
        element:<Blog />
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ( { params } ) => fetch(`http://localhost:3000/books/${params.id}`)
      }
      

    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />
        //////   vedio 6:15:50 //////////

        // the sign in disappears
        //       element: <PriavteRoute><Dashboard/></PriavteRoute>,
        
        
        // //////////////////////////////////////////
        ,    
      },
      {
        path: "/admin/dashboard/uploadbook",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ( { params } ) => fetch( `http://localhost:3000/books/${ params.id }` )
      }
    ]
  }
  ,{
    path:"sign-up",
    element:<Signup/>
  },{
    path:"login",
    element:<Login/>
  },{
    path:"logout",
    element:<Logout/>
  }


]);
export default router 