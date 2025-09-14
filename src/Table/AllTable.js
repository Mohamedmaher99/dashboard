import Menu from "../Shared/Menu";
import DashboardNav from "../Shared/DashboardNav";
import AuthorsTable from "./AuthorsTable";
import AllMenuControl from "../MenuControl/AllMenuControl";
import AllFooter from "../Footer/AllFooter";

function AllTable() {
    return (
        <div >
            <Menu />
            <div className="all-pages">
                <DashboardNav />
                <AuthorsTable/>
                <AllMenuControl/>
                <AllFooter/>
            </div>

        </div>
    )
}
export default AllTable;