import { Outlet } from "react-router-dom"
import { Navbar } from "../Components/Navbar"

export const Layout=({sidebar ,setSidebar})=>{


  return(

    <>
    <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
    <Outlet />
    </>
  )
}