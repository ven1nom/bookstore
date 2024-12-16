import {createBrowserRouter } from "react-router";
import App from "../App"
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import SingleBook from "../pages/books/SingleBook";


const router=createBrowserRouter([
    {
       path:'/',
       element:<App/>,
       children:[
        {
            path:'/',
            element:<h1><Home/></h1>
            /* Home mein multiple sub division rahege so create a separate page */
        },
        {
            path:'/orders',
            element:<div>Orders</div>
        },
        {
            path:"/about",
            element:<div>About</div>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
             path:'/books/:id',
             element:<SingleBook/>
        }
       ]
}]);

export default router;