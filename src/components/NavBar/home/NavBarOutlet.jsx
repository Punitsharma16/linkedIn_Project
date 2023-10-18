import { Outlet } from "react-router-dom"
import { AppNavbar } from "../navbar"
// import { Jobs } from "../Jobs/jobs"

export const NavBarWithOutlet = ()=>{
    return(
        <main>
            <AppNavbar/>
            <Outlet/>
            {/* <Jobs/> */}
        </main>
    )
}