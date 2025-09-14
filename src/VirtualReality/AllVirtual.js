import DashboardNav from "../Shared/DashboardNav";
import MainVirtual from "./MainVirtual";
import AllMenuControl from "../MenuControl/AllMenuControl";
import AllFooter from "../Footer/AllFooter";



function AllVirtual() {
    return (
        <div>
            <div className="my-3 mx-3">
                <DashboardNav />

            </div>
            <div className="my-3 mx-3">
            <MainVirtual />
            <AllMenuControl/>
            <AllFooter/>
            </div>
        </div>
    )
}
export default AllVirtual;