import ScrollTop from "./ScrollTop"
import { Outlet } from "react-router"
function Layout(){
    return(
        <div>
            <ScrollTop/>
            <Outlet/>
        </div>
    )
}
export default Layout;