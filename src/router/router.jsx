import { createBrowserRouter } from "react-router-dom";
import AllOutlet from "./AllOutlet";
import HomePage from "../Pages/HomePage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ApplyDetailsPage from "../Pages/ApplyDetailsPage";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply";
import UserApplyedJob from "../Pages/UserApplyedJob";
import PpostJob from "../Pages/PpostJob";
import PostUserData from "../Pages/PostUserData";
import SpecificCount from "../Pages/SpecificCount";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AllOutlet/>,
    children:[
        {
            path:'/',
            element:<HomePage/>,
            loader: ()=>fetch('http://localhost:3000/jobdata')
        },
        {
          path:'/applydetail/:id',
          element:<PrivateRoute><ApplyDetailsPage/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/jobdata/${params.id}`)
        },
        {
          path:'/jobapply/:id',
          element:<JobApply/>
        },
        {
          path:'/jobapplyed',
          element:<PrivateRoute><UserApplyedJob/></PrivateRoute>
        },
        {
          path:'/postUser',
          element:<PrivateRoute><PostUserData/></PrivateRoute>
        },
        {
          path:'/postjob',
          element:<PrivateRoute><PpostJob/></PrivateRoute>
        },
        {
          path:'/speceficjob/:id',
          element:<PrivateRoute><SpecificCount/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/jobappli/${params.id}`)
        },
        {
            path:'/signIn',
            element:<SignIn/>
        },
        {
            path:'/signUp',
            element:<SignUp/>
        },
    ]
  },
]);

export default router