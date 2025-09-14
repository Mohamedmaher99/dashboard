import Menu from "../Shared/Menu"
import DashboardNav from "../Shared/DashboardNav"
import MainBilling from "./MainBilling";
import Information from "./Information";
import AllMenuControl from "../MenuControl/AllMenuControl";
import AllFooter from "../Footer/AllFooter";
function AllBilling(){
    return(
        <div>
            <Menu/>
            <div className="all-pages">
                <DashboardNav/>
                <MainBilling/>
                <Information/>
                <AllMenuControl/>
                <AllFooter/>
            </div>


        </div>
    )
}
export default AllBilling;