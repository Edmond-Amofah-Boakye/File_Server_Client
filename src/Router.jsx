import ForgotPassword from './components/ForgotPassword'
import Signin from './components/Signin'
import Signup from './components/Signup'
import ResetPassword from './components/ResetPassword'
import ErrorPage from './components/ErrorPage'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Feeds from './components/Feeds'
import SendFile from './components/SendFile'
import Dashboard from './components/Admin/Dashboard'
import About from './components/About'
import Home from './components/Home'
import AddFile from './components/Admin/AddFile'
import EditFile from './components/Admin/EditFile'
import Settings from './components/Admin/Settings'
import AllFiles from './components/Admin/AllFiles'
import Users from './components/Admin/Users'
import MainDetails from './components/Admin/MainDetails'
import AdminPasswordReset from './components/Admin/AdminPasswordReset'
import VerifyUser from './components/Verify/VerifyUser'
import Auth from './components/Helpers/Auth'
import AdminAuth from './components/Helpers/AdminAuth'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/forgotpassword",
    element:  <ForgotPassword />
  },
  {
    path: "/verify/:token",
    element:  <VerifyUser />
  },
  {
    path: "/signup",
    element:  <Signup />
  },
  {
    path: "/feeds",
    element:  <Auth><Feeds /></Auth>
  },
  {
    path: "/file/send/email/:id",
    element:  <Auth><SendFile /></Auth>
  },
  {
    path: "/password/reset/:token",
    element:  <ResetPassword />
  },
  {
    path: "/admin/dashboard",
    element:  <AdminAuth><Dashboard/></AdminAuth>,
      children:[
        {
          path: "settings",
          element:  <Settings />
        },
        {
          path: "users",
          element:  <Users />
        },
        {
          path: "password/change",
          element:  <AdminPasswordReset />
        },
        {
          path: "files",
          element:  <AllFiles />
        },
        {
          path: "",
          element:  <MainDetails />
        }
      ]
  },
  {
    path: "/files/add",
    element:  <AdminAuth><AddFile /></AdminAuth>
  },
  {
    path: "/file/edit/:id",
    element:  <AdminAuth><EditFile /></AdminAuth>
  },
  {
    path: "*",
    element:  <ErrorPage />
  }

])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router